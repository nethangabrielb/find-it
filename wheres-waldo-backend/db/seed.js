const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const main = async () => {
  // Seed photo data
  await prisma.photo.createMany({
    data: [
      {
        id: 2,
        name: "5 Days",
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/5days.jpg",
      },
      {
        id: 1,
        name: "Gamerverse",
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/gamingVerse.jpg",
      },
      {
        id: 3,
        name: "Universe 11",
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/universe11.jpeg",
      },
    ],
  });
  // Seed character data
  await prisma.character.createMany({
    data: [
      {
        id: 3,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/gamerVerse-characters/gv-ch-3.png",
        coordinatesRanges: {
          x1: "1256",
          x2: "1307",
          y1: "2599",
          y2: "2670",
        },
        photoId: 1,
      },
      {
        id: 4,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/universe11-characters/u11-ch-1.png",
        coordinatesRanges: {
          x1: 1102,
          x2: 1150.62,
          y1: 440,
          y2: 478.638,
        },
        photoId: 3,
      },
      {
        id: 5,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/universe11-characters/u11-ch-2.png",
        coordinatesRanges: {
          x1: 468.29,
          x2: 510.1,
          y1: 2316.88,
          y2: 2343.64,
        },
        photoId: 3,
      },
      {
        id: 7,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/5days-characters/5d-ch-1.png",
        coordinatesRanges: {
          x1: 1368,
          x2: 1396,
          y1: 850,
          y2: 912.21,
        },
        photoId: 2,
      },
      {
        id: 8,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/5days-characters/5d-ch-2.png",
        coordinatesRanges: {
          x1: 283,
          x2: 313.41,
          y1: 621.96,
          y2: 684.163,
        },
        photoId: 2,
      },
      {
        id: 9,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/5days-characters/5d-ch-3.png",
        coordinatesRanges: {
          x1: 945,
          x2: 975,
          y1: 78,
          y2: 97,
        },
        photoId: 2,
      },
      {
        id: 1,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/gamerVerse-characters/gv-ch-2.png",
        coordinatesRanges: {
          x1: "39",
          x2: "96",
          y1: "313.7",
          y2: "405.7",
        },
        photoId: 1,
      },
      {
        id: 2,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/gamerVerse-characters/gv-ch-1.png",
        coordinatesRanges: {
          x1: "1838.55",
          x2: "1892.85",
          y1: "3010.40",
          y2: "3106.91",
        },
        photoId: 1,
      },
      {
        id: 6,
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/public/photos/universe11-characters/u11-ch-3.png",
        coordinatesRanges: {
          x1: 1128,
          x2: 1198,
          y1: 1303,
          y2: 1425.25,
        },
        photoId: 3,
      },
    ],
  });
};

main();
