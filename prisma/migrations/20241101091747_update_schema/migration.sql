/*
  Warnings:

  - A unique constraint covering the columns `[Ten]` on the table `San` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `San_Ten_key` ON `San`(`Ten`);
