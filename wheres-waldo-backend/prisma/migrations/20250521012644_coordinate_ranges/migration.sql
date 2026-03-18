/*
  Warnings:

  - You are about to drop the column `coordinates` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "coordinates",
ADD COLUMN     "coordinatesRanges" JSONB;
