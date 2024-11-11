-- DropIndex
DROP INDEX `HinhSanPham_idSanPham_fkey` ON `hinhsanpham`;

-- AlterTable
ALTER TABLE `sanpham` MODIFY `images` VARCHAR(255) NULL;
