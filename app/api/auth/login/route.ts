import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Send login request to FastAPI
        const fastapiResponse = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const res_json = await fastapiResponse.json();

        const data = res_json.data;

        if (!fastapiResponse.ok) {
            return new NextResponse(JSON.stringify(data), { status: fastapiResponse.status });
        }
        
        const { access_token, ...userData } = data;
        // Extract JWT from FastAPI response

        if (!access_token) {
            return new NextResponse(JSON.stringify({ message: "JWT token missing" }), { status: 500 });
        }

        

        // Strip JWT data from response
        const cleanResponse = new NextResponse(JSON.stringify({ data: userData }), {
            status: 200,
            headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `access_token=${access_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
            },
        });
        
        return cleanResponse;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
