import { SentEmail } from "@/utility/emailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let email = searchParams.get("email");
    // count user
    const count = await prisma.users.count({ where: { email:email } });

    if (count === 1) {
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailText = `Your otp code is =${code}`;
      let EmailSubject = "NEXT NEWS Verification code";
      await SentEmail(email, EmailText, EmailSubject);
      let result = await prisma.users.update({
        where: { email: email },
        data: { otp: code.toString() },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "no user found" });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
