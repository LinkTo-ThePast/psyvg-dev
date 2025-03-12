import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
    try {
        // Extract JWT token from cookies
        const token = req.cookies.get("access_token");

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        // Send token in Authorization header
        const fastapiResponse = await fetch(`${API_URL}/chat/get-chat`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`,
            },
            credentials: "include",
        });

        const res_json = await fastapiResponse.json();
        
        return NextResponse.json(res_json, { status: fastapiResponse.status });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
