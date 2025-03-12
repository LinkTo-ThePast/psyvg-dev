import { NextResponse } from "next/server";

export async function POST() {
    return new NextResponse(JSON.stringify({ message: "Logged out" }), {
        status: 200,
        headers: {
            "Set-Cookie": "access_token=; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=0",
        },
    });
}
