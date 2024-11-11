import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const imageproduct = await prisma.hinhSanPham.findMany();
  return NextResponse.json(
    { imageproduct, message: "Hình ảnh của sản phẩm" },
    { status: 201 }
  );
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const hinhanh = await prisma.hinhSanPham.create({
      data: {
        idSanPham: body.idSanPham,
        Ten: body.Ten,
        DuongDan: body.DuongDan,
        NgayTao: body.NgayTao,
        NgayCapNhat: body.NgayCapNhat,
      },
    });
    return NextResponse.json(
      { hinhanh, message: "Thêm mới hình ảnh thành công" },
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
