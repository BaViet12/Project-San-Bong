import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const GetDanhMuc = await prisma.danhMuc.findMany();
  return NextResponse.json(GetDanhMuc);
}
