/*
  Warnings:

  - You are about to drop the column `pixels` on the `Photo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "pixels",
ADD COLUMN     "toFind" JSONB;
