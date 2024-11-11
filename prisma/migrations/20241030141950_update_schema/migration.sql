/*
  Warnings:

  - Added the required column `images` to the `SanPham` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `hinhsanpham` DROP FOREIGN KEY `HinhSanPham_idSanPham_fkey`;

-- AlterTable
ALTER TABLE `sanpham` ADD COLUMN `images` VARCHAR(255) NOT NULL;
