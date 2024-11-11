-- CreateTable
CREATE TABLE `VaiTro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nguoidung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,
    `SoDienThoai` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `DiaChi` VARCHAR(191) NOT NULL,
    `MaVaiTro` INTEGER NOT NULL,
    `MatKhau` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Nguoidung_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quyen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,
    `MoTa` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VaiTro_Quyen` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `MaVaiTro` INTEGER NOT NULL,
    `MaQuyen` INTEGER NOT NULL,
    `Ten` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DanhMuc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,
    `MoTa` VARCHAR(45) NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,
    `parent_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `San` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` ENUM('HOATDONG', 'BAOTRI', 'NGUNG_HOATDONG') NOT NULL DEFAULT 'HOATDONG',
    `Sale` INTEGER NULL,
    `Gia` INTEGER NULL,
    `Tongtien` INTEGER NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,
    `idDanhMuc` INTEGER NULL,
    `TongDanhGia` INTEGER NULL,
    `TongSao` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `San_HinhAnh` (
    `idSan` INTEGER NOT NULL,
    `Ten` VARCHAR(191) NOT NULL,
    `Link` VARCHAR(191) NOT NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,

    PRIMARY KEY (`idSan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DanhGia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NoiDung` VARCHAR(191) NOT NULL,
    `id_San` INTEGER NULL,
    `id_Nguoidung` INTEGER NULL,
    `Sao` INTEGER NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BaoTri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,
    `NgayBatDau` DATETIME(3) NULL,
    `NgayKetThuc` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DotBaoTri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `BaoTri` INTEGER NULL,
    `San` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GiaSan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `GioBatDau` DATETIME(3) NULL,
    `GioKetThuc` DATETIME(3) NULL,
    `Gia` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LichLamViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MaNguoiDung` INTEGER NULL,
    `NgayLamViec` DATETIME(3) NULL,
    `CaLam` VARCHAR(191) NULL,
    `GioBatDau` DATETIME(3) NULL,
    `GioKetThuc` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CongViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MaNguoiDung` INTEGER NULL,
    `MoTa` VARCHAR(191) NULL,
    `TrangThai` INTEGER NULL,
    `NgayGiao` DATETIME(3) NULL,
    `NgayKetThuc` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SanPham` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,
    `MoTa` VARCHAR(191) NULL,
    `SoLuong` INTEGER NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,
    `GiaBan` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NhaCungCap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,
    `DiaChi` VARCHAR(191) NULL,
    `SoDienThoai` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NULL,
    `idSanPham` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HinhSanPham` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idSanPham` INTEGER NOT NULL,
    `Ten` VARCHAR(191) NULL,
    `DuongDan` VARCHAR(191) NULL,
    `NgayTao` DATETIME(3) NULL,
    `NgayCapNhat` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KhuyenMai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,
    `NgayBatDau` DATETIME(3) NULL,
    `NgayKetThuc` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SanPhamKhuyenMai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SanPham` INTEGER NULL,
    `KhuyenMai` INTEGER NULL,
    `SoLuong` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HinhThucThanhToan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DonDatHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NgayTao` DATETIME(3) NULL,
    `TrangThaiThanhToan` VARCHAR(191) NULL,
    `idKhachHang` INTEGER NULL,
    `MaThanhToan` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SanPham_DonDatHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_SanPham` INTEGER NULL,
    `id_DonHang` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatSan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_NguoiDat` INTEGER NULL,
    `id_San` INTEGER NULL,
    `GioBatDau` DATETIME(3) NULL,
    `GioTraSan` DATETIME(3) NULL,
    `TongTien` INTEGER NULL,
    `TrangThai` ENUM('CHO_XAC_NHAN', 'DA_XAC_NHAN', 'DANG_THUE', 'DA_TRA', 'DA_HUY') NOT NULL DEFAULT 'CHO_XAC_NHAN',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Nguoidung` ADD CONSTRAINT `Nguoidung_MaVaiTro_fkey` FOREIGN KEY (`MaVaiTro`) REFERENCES `VaiTro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaiTro_Quyen` ADD CONSTRAINT `VaiTro_Quyen_MaVaiTro_fkey` FOREIGN KEY (`MaVaiTro`) REFERENCES `VaiTro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaiTro_Quyen` ADD CONSTRAINT `VaiTro_Quyen_MaQuyen_fkey` FOREIGN KEY (`MaQuyen`) REFERENCES `Quyen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DanhMuc` ADD CONSTRAINT `DanhMuc_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `DanhMuc`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `San` ADD CONSTRAINT `San_idDanhMuc_fkey` FOREIGN KEY (`idDanhMuc`) REFERENCES `DanhMuc`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `San_HinhAnh` ADD CONSTRAINT `San_HinhAnh_idSan_fkey` FOREIGN KEY (`idSan`) REFERENCES `San`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DanhGia` ADD CONSTRAINT `DanhGia_id_San_fkey` FOREIGN KEY (`id_San`) REFERENCES `San`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DanhGia` ADD CONSTRAINT `DanhGia_id_Nguoidung_fkey` FOREIGN KEY (`id_Nguoidung`) REFERENCES `Nguoidung`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DotBaoTri` ADD CONSTRAINT `DotBaoTri_BaoTri_fkey` FOREIGN KEY (`BaoTri`) REFERENCES `BaoTri`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DotBaoTri` ADD CONSTRAINT `DotBaoTri_San_fkey` FOREIGN KEY (`San`) REFERENCES `San`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GiaSan` ADD CONSTRAINT `GiaSan_id_fkey` FOREIGN KEY (`id`) REFERENCES `San`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LichLamViec` ADD CONSTRAINT `LichLamViec_MaNguoiDung_fkey` FOREIGN KEY (`MaNguoiDung`) REFERENCES `Nguoidung`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CongViec` ADD CONSTRAINT `CongViec_MaNguoiDung_fkey` FOREIGN KEY (`MaNguoiDung`) REFERENCES `Nguoidung`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NhaCungCap` ADD CONSTRAINT `NhaCungCap_idSanPham_fkey` FOREIGN KEY (`idSanPham`) REFERENCES `SanPham`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HinhSanPham` ADD CONSTRAINT `HinhSanPham_idSanPham_fkey` FOREIGN KEY (`idSanPham`) REFERENCES `SanPham`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanPhamKhuyenMai` ADD CONSTRAINT `SanPhamKhuyenMai_SanPham_fkey` FOREIGN KEY (`SanPham`) REFERENCES `SanPham`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanPhamKhuyenMai` ADD CONSTRAINT `SanPhamKhuyenMai_KhuyenMai_fkey` FOREIGN KEY (`KhuyenMai`) REFERENCES `KhuyenMai`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DonDatHang` ADD CONSTRAINT `DonDatHang_idKhachHang_fkey` FOREIGN KEY (`idKhachHang`) REFERENCES `Nguoidung`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DonDatHang` ADD CONSTRAINT `DonDatHang_MaThanhToan_fkey` FOREIGN KEY (`MaThanhToan`) REFERENCES `HinhThucThanhToan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanPham_DonDatHang` ADD CONSTRAINT `SanPham_DonDatHang_id_SanPham_fkey` FOREIGN KEY (`id_SanPham`) REFERENCES `SanPham`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SanPham_DonDatHang` ADD CONSTRAINT `SanPham_DonDatHang_id_DonHang_fkey` FOREIGN KEY (`id_DonHang`) REFERENCES `DonDatHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatSan` ADD CONSTRAINT `DatSan_id_NguoiDat_fkey` FOREIGN KEY (`id_NguoiDat`) REFERENCES `Nguoidung`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DatSan` ADD CONSTRAINT `DatSan_id_San_fkey` FOREIGN KEY (`id_San`) REFERENCES `San`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
