import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  requets: NextRequest,
  { params }: { params: { id: string } }
) {
  const SoccerId = parseInt(params.id);
  try {
    const DeleteSoccer = await prisma.san.delete({ where: { id: SoccerId } });
    return NextResponse.json(
      { DeleteSoccer, message: `Đã xóa sân có ID : ${params.id}` },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Xóa thất bại", error: error.message },
      { status: 500 }
    );
  }
}
export async function GET(
  requets: NextRequest,
  { params }: { params: { id: string } }
) {
  const SoccerId = parseInt(params.id);
  try {
    const Soccer = await prisma.san.findUnique({ where: { id: SoccerId } });
    return NextResponse.json(
      { Soccer, message: `Thông tin sân có ID ${params.id} ` },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Lỗi", error: error.message },
      { status: 500 }
    );
  }
}


