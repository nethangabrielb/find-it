const { PrismaClient } = require("../generated/prisma");
const { body, validationResult } = require("express-validator");
const _ = require("lodash");
const https = require("https");

const prisma = new PrismaClient();

const headRequest = (url) =>
  new Promise((resolve, reject) => {
    const req = https.request(url, { method: "HEAD" }, (res) => {
      // Drain to free socket.
      res.resume();
      resolve({ statusCode: res.statusCode });
    });
    req.on("error", reject);
    req.end();
  });

exports.health = async (req, res) => {
  // Touch a public Supabase Storage asset so the Supabase project registers activity.
  // This does not require any keys and is safe to call frequently.
  const supabasePublicAsset =
    "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/5days.jpg";

  try {
    // Also touch the database (Supabase Postgres) via Prisma to keep DB connections active.
    // Keep it extremely lightweight to avoid any load/cost issues.
    const [photoCount, supabase] = await Promise.all([
      prisma.photo.count(),
      headRequest(supabasePublicAsset),
    ]);
    res.status(200).json({
      ok: true,
      service: "wheres-waldo-backend",
      db: { touched: true, photoCount },
      supabase: { touched: true, statusCode: supabase.statusCode ?? null },
      now: new Date().toISOString(),
    });
  } catch (e) {
    // Still return 200 so uptime pings don't flap if Supabase has a blip.
    res.status(200).json({
      ok: true,
      service: "wheres-waldo-backend",
      db: { touched: false },
      supabase: { touched: false, error: e?.message ?? "unknown error" },
      now: new Date().toISOString(),
    });
  }
};

exports.getAllGames = async (req, res) => {
  const games = await prisma.photo.findMany({
    include: {
      Character: true,
      User: {
        orderBy: {
          score: "asc",
        },
      },
    },
  });

  if (!games) {
    res.sendStatus(500);
  }

  res.json({ games });
};

exports.getGame = async (req, res) => {
  const game = await prisma.photo.findUnique({
    where: {
      id: Number(req.params.photoId),
    },
    include: {
      Character: true,
      User: {
        orderBy: {
          score: "asc",
        },
      },
    },
  });

  if (!game) {
    res.sendStatus(500);
  }
  res.json({ game });
};

exports.validateCoordinates = async (req, res) => {
  const photo = await prisma.photo.findFirst({
    where: {
      id: Number(req.params.photoId),
    },
    include: {
      Character: true,
    },
  });
  const clickCoordinates = req.body.coordinates;
  const characterId = Number(req.body.characterId);
  const characterToVerify = photo.Character.filter(
    (char) => char.id === characterId
  )[0];

  // Validate x click coordinate
  // if it is between the the acceptable horizontal pixels
  const xValid = _.inRange(
    clickCoordinates.x,
    characterToVerify.coordinatesRanges.x1,
    characterToVerify.coordinatesRanges.x2
  );

  // Validate y click coordinate
  // if it is between the the acceptable horizontal pixels
  const yValid = _.inRange(
    clickCoordinates.y,
    characterToVerify.coordinatesRanges.y1,
    characterToVerify.coordinatesRanges.y2
  );

  if (xValid && yValid) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

exports.postScore = [
  body("name").custom(async (value, { req }) => {
    const isExist = await prisma.user.findFirst({
      where: {
        name: value,
        photoId: req.body.photoId,
      },
    });
    if (isExist) {
      throw new Error("Name is already taken.");
    }
  }),
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.status(500).json({ errors: errors.array() });
    }

    const newUser = await prisma.user.create({
      data: {
        photoId: req.body.photoId,
        score: req.body.score,
        name: req.body.name,
        formattedScore: req.body.formatted,
      },
    });

    if (newUser) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  },
];
