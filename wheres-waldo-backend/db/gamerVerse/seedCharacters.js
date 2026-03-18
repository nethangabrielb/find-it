const { PrismaClient } = require("../../generated/prisma");

const prisma = new PrismaClient();

const main = async () => {
  await prisma.character.createMany({
    data: [
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/gamerVerse-characters/gv-ch-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2YyMTU3YzFmLWU4MzAtNGQyYy1hYjMxLTU5ZDE3NjBmZGVjYiJ9.eyJ1cmwiOiJwaG90b3MvZ2FtZXJWZXJzZS1jaGFyYWN0ZXJzL2d2LWNoLTIucG5nIiwiaWF0IjoxNzQ3Nzg4NzE0LCJleHAiOjIwNjMxNDg3MTR9.pcV_-Y5BlZF8bhZmBrYddzlSe1D_RM52dYjC453_K38",
        coordinatesRanges: { x1: 39, x2: 96, y1: 313.7, y2: 405.7 },
        photoId: 1,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/gamerVerse-characters/gv-ch-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2YyMTU3YzFmLWU4MzAtNGQyYy1hYjMxLTU5ZDE3NjBmZGVjYiJ9.eyJ1cmwiOiJwaG90b3MvZ2FtZXJWZXJzZS1jaGFyYWN0ZXJzL2d2LWNoLTEucG5nIiwiaWF0IjoxNzQ3Nzg4Njg4LCJleHAiOjIwNjMxNDg2ODh9.gsYtMe73pWiTU-iWkvwGkFR34CTBvWaQ_jdG1_iuBuQ",
        coordinatesRanges: {
          x1: 1838.55,
          x2: 1892.85,
          y1: 3010.4,
          y2: 3106.91,
        },
        photoId: 1,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/gamerVerse-characters/gv-ch-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2YyMTU3YzFmLWU4MzAtNGQyYy1hYjMxLTU5ZDE3NjBmZGVjYiJ9.eyJ1cmwiOiJwaG90b3MvZ2FtZXJWZXJzZS1jaGFyYWN0ZXJzL2d2LWNoLTMucG5nIiwiaWF0IjoxNzQ3Nzg4NzQwLCJleHAiOjIwNjMxNDg3NDB9.JIElq7G6g-JQfLAYefgoZpdBqXRxPjQ4oAwxW5z4gK8",
        coordinatesRanges: { x1: 1256, x2: 1307, y1: 2599, y2: 2670 },
        photoId: 1,
      },
    ],
  });
};

main();
