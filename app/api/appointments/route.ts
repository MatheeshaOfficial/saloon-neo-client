import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    return NextResponse.json(
        {
            message : "Get request received into /api/appointments/cancel"
        }
    )

}