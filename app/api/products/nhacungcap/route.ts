import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

  export async function GET(requets: NextRequest) {
    const nhacungcap = await prisma.nhaCungCap.findMany();
    return NextResponse.json({ nhacungcap, message: "Oke" }, { status: 201 });
  }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.Ten || !body.Email || !body.SoDienThoai) {
      throw new Error("Thiếu thông tin bắt buộc");
    }
    const taonhacungcap = await prisma.nhaCungCap.create({
      data: {
        Ten: body.Ten,
        DiaChi: body.DiaChi,
        SoDienThoai: body.SoDienThoai,
        Email: body.Email,
        idSanPham: body.idSanPham,
      },
    });
    return NextResponse.json(
      { taonhacungcap, message: "Tạo nhà cung cấp thành công" },
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
