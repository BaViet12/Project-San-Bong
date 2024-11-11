/*
  Warnings:

  - You are about to drop the column `images` on the `sanpham` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `sanpham` DROP COLUMN `images`;

-- AddForeignKey
ALTER TABLE `HinhSanPham` ADD CONSTRAINT `HinhSanPham_idSanPham_fkey` FOREIGN KEY (`idSanPham`) REFERENCES `SanPham`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
