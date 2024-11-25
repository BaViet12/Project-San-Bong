import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ue = await prisma.san.findFirst({ where: { Ten: body.Ten } });
    const loaiSanExists = await prisma.danhMuc.findUnique({
      where: {
        id: parseInt(body.idDanhMuc),
      },
    });

    if (!loaiSanExists) {
      return NextResponse.json(
        {
          message: "Loại sân không tồn tại",
          code: "invalid_loai_San",
        },
        { status: 400 }
      );
    }
    if (ue == null) {
      const newSan = await prisma.san.create({
        data: {
          Ten: body.Ten,
          MoTa: body.MoTa,
          TrangThai: body.TrangThai,
          Sale: parseInt(body.Sale),
          Gia: parseInt(body.Gia),
          Tongtien: parseInt(body.Tongtien),
          HinhDaiDien: body.HinhDaiDien,
          idDanhMuc: parseInt(body.idDanhMuc),
          TongDanhGia: parseInt(body.TongDanhGia),
          TongSao: parseInt(body.TongSao),
        },
        include: {
          danhMuc: true,
        },
      });
      return NextResponse.json(
        { newSan, message: "Tạo mới sân thành công" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ message: "Sân đã tồn tại" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Lỗi khi tạo mới sân", error);
    return NextResponse.json(
      {
        message: "Tạo sân thất bại",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const Soccer = await prisma.san.findMany();
    return NextResponse.json(
      { Soccer, message: "Các sân bóng" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Có lỗi khi get dữ liệu", error);
    return NextResponse.json(
      {
        message: "Thất bại",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const DeleteSan = await prisma.san.deleteMany();
  return NextResponse.json(
    { DeleteSan, message: "Xóa thành công" },
    { status: 201 }
  );
}
