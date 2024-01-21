import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.categories.findMany({
      select: { id: true, name: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const result = await prisma.categories.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

// export async function POST(req, res) {
//   try {
//     let headerList = headers();
//     let id = parseInt(headerList.get("id"));
//     console.log(id);
//     const prisma = new PrismaClient();
//     const reqBody = await req.json();
//     const result = await prisma.categories.update({
//       where: id,
//       data: reqBody,
//     });
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error.toString() });
//   }
// }
