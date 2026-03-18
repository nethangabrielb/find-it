const { PrismaClient } = require("../../generated/prisma");

const prisma = new PrismaClient();

const main = async () => {
  await prisma.character.createMany({
    data: [
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/5days-characters/5d-ch-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvNWRheXMtY2hhcmFjdGVycy81ZC1jaC0xLnBuZyIsImlhdCI6MTc0ODQwNzg1NSwiZXhwIjoyMDYzNzY3ODU1fQ.9JkL7ZbRY6vaBmUxFr3DMOovbucloUJKksqauICINN0",
        coordinatesRanges: { x1: 1368, x2: 1396, y1: 850, y2: 912.21 },
        photoId: 2,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/5days-characters/5d-ch-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvNWRheXMtY2hhcmFjdGVycy81ZC1jaC0yLnBuZyIsImlhdCI6MTc0ODQwNzg3MiwiZXhwIjoyMDYzNzY3ODcyfQ.KZrliLwRC7Lk5rjmdULmnzJ30xcdC9Q5Iw_y3s_Mdd8",
        coordinatesRanges: { x1: 283, x2: 313.41, y1: 621.96, y2: 684.163 },
        photoId: 2,
      },
      {
        url: "https://gcwuvahgrsxeubnvkbvd.supabase.co/storage/v1/object/sign/photos/5days-characters/5d-ch-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI5YjczZWFjLWM5YTMtNDdjMy04ZGM0LWFiM2EwNDQyMmU2MiJ9.eyJ1cmwiOiJwaG90b3MvNWRheXMtY2hhcmFjdGVycy81ZC1jaC0zLnBuZyIsImlhdCI6MTc0ODQwNzg4NSwiZXhwIjoyMDYzNzY3ODg1fQ.8R_zNOGdjweGxoN2bbgmggEUmGBUNbSBbIIbpTPKaTs",
        coordinatesRanges: { x1: 945, x2: 975, y1: 78, y2: 97 },
        photoId: 2,
      },
    ],
  });
};

main();
