/*
  Warnings:

  - A unique constraint covering the columns `[name,photoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_name_photoId_key" ON "User"("name", "photoId");
