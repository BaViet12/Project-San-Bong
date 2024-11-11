import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const product = await prisma.sanPham.findMany();
  return NextResponse.json({ product, message: "Oke" }, { status: 201 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.Ten) {
      throw new Error("Thiếu thông tin bắt buộc");
    }

    const productCreate = await prisma.sanPham.create({
      data: {
        Ten: body.Ten,
        MoTa: body.MoTa,
        SoLuong: body.SoLuong,
        NgayTao: body.NgayTao,
        NgayCapNhat: body.NgayCapNhat,
        GiaBan: body.GiaBan,
        images: body.images,
      },
    });

    return NextResponse.json(
      { productCreate, message: "Thêm mới thành công" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      {
        message: "đã xảy ra lỗi khi thêm mới sản phẩm",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const DeleteProduct = await prisma.sanPham.deleteMany();
  return NextResponse.json(
    { DeleteProduct, message: "Xóa tất cả các sản phẩm" },
    { status: 201 }
  );
}
