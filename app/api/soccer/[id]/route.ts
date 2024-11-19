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
export async function PUT(
  requets: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await requets.json();
  const Id = parseInt(params.id);
  const ue = await prisma.san.findFirst({ where: { Ten: body.Ten } });
  if (ue == null) {
    const PutSoccer = await prisma.san.update({
      where: { id: Id },
      data: {
        Ten: body.Ten,
        MoTa: body.MoTa,
        TrangThai: body.TrangThai,
        Sale: parseInt(body.Sale),
        Gia: parseInt(body.Gia),
        Tongtien: parseInt(body.Tongtien),
        idDanhMuc: parseInt(body.idDanhMuc),
        TongDanhGia: parseInt(body.TongDanhGia),
        TongSao: parseInt(body.TongSao),
      },
    });
    return NextResponse.json(
      {
        PutSoccer,
        message: `Cập nhật Sân bóng có mã id ${params.id}`,
      },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ message: "Sân đã tồn tại" }, { status: 400 });
  }
}
