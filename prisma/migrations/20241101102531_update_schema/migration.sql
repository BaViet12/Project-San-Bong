/*
  Warnings:

  - You are about to drop the column `NgayCapNhat` on the `san` table. All the data in the column will be lost.
  - You are about to drop the column `NgayTao` on the `san` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `san` DROP COLUMN `NgayCapNhat`,
    DROP COLUMN `NgayTao`;
