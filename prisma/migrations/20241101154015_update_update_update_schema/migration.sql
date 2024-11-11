/*
  Warnings:

  - Made the column `Sale` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Gia` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Tongtien` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idDanhMuc` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TongDanhGia` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `TongSao` on table `san` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `san` DROP FOREIGN KEY `San_idDanhMuc_fkey`;

-- AlterTable
ALTER TABLE `san` MODIFY `Sale` INTEGER NOT NULL,
    MODIFY `Gia` INTEGER NOT NULL,
    MODIFY `Tongtien` INTEGER NOT NULL,
    MODIFY `idDanhMuc` INTEGER NOT NULL,
    MODIFY `TongDanhGia` INTEGER NOT NULL,
    MODIFY `TongSao` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `San` ADD CONSTRAINT `San_idDanhMuc_fkey` FOREIGN KEY (`idDanhMuc`) REFERENCES `DanhMuc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
