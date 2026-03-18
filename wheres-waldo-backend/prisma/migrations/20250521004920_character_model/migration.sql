-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "coordinates" INTEGER NOT NULL,
    "photoId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
