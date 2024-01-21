import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try {
    
        const prisma = new PrismaClient()
        const {searchParams}= new URL(req.url)
        let type = searchParams.get('type') 
        const result = await prisma.policies.findMany( )
    return NextResponse.json({ status: "success", data: result });

    } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
        
    }
}