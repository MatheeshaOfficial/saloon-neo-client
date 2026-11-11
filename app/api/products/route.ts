import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    const name = req.nextUrl.searchParams.get("name");
    const age = req.nextUrl.searchParams.get("age");
    const city = req.nextUrl.searchParams.get("city");

    console.log("Get request received into /api/products");
    console.log("Name : "+name);
    console.log("Age : "+age);
    console.log("City : "+city);   

    return NextResponse.json(
        {
            message : "Get request received into /api/products",
            name : name,
            age : age,
            city : city
        }
    )

}

// 58.31
// localhost:3000/api/products?name=computer&age=18&city=galle