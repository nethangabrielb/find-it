const { PrismaClient } = require("../../generated/prisma");

const prisma = new PrismaClient();

const main = async () => {
  await prisma.character.createMany({
    data: [
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/universe11-characters/u11-ch-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvdW5pdmVyc2UxMS1jaGFyYWN0ZXJzL3UxMS1jaC0xLnBuZyIsImlhdCI6MTc0ODQwMTE0OCwiZXhwIjoyMDYzNzYxMTQ4fQ.Pyx3YI6W718sOXamfwXp_AWFB8fsl3s8-oa3PigI6dE",
        coordinatesRanges: {
          x1: 1102,
          x2: 1150.62,
          y1: 440,
          y2: 478.638,
        },
        photoId: 3,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/universe11-characters/u11-ch-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvdW5pdmVyc2UxMS1jaGFyYWN0ZXJzL3UxMS1jaC0yLnBuZyIsImlhdCI6MTc0ODQwMTQ4OCwiZXhwIjoyMDYzNzYxNDg4fQ.NU-pUijnZ4ZeYjrZ8_e6xXesyJzWukz5NUWAxQkdRtE",
        coordinatesRanges: {
          x1: 468.29,
          x2: 510.1,
          y1: 2316.88,
          y2: 2343.64,
        },
        photoId: 3,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/universe11-characters/u11-ch-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvdW5pdmVyc2UxMS1jaGFyYWN0ZXJzL3UxMS1jaC0zLnBuZyIsImlhdCI6MTc0ODQwMTM4MiwiZXhwIjoyMDYzNzYxMzgyfQ.WQywf8LtXVsFezZdEpUksDhpLsbuuWqLjD30SWfupoU",
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
