import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const count = await prisma.users.count({
      where: { email: reqBody["email"],otp:reqBody['otp'] }});
 
    if (count === 1) {
        await prisma.users.update({
            where:{email: reqBody['email']},
            data:{otp:"0",password:reqBody['password']}

        })
      return NextResponse.json({
        status: "success",
        data: "success Password Changed",
      });
    } else {


      return NextResponse.json({ status: "fail", data: "password are't change" });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
