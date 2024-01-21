import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {

    const reqHeader = headers()
    const id = parseInt(reqHeader.get('id'))
    const prisma = new PrismaClient();
    const reqBody =  await req.json()
    const result = await prisma.users.update({
        where:{id:id},
        data:reqBody
    })

   
    return NextResponse.json({ status: "success", data: result });

  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

