import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // Extract JWT token from cookies
        const token = req.cookies.get("access_token");

        const body = await req.json();

        const method = body.method;
        const url = body.url;
        const content = body.content;

        // Send token in Authorization header
        const fastapiResponse = await fetch(`${url}`, {
            method: method,
            headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token.value}` : "",
            },
            credentials: "include",
            ...(content && { body: JSON.stringify(content) })
        });

        const res_json = await fastapiResponse.json();
        const data = res_json.data;
        if (data && data.access_token) {
            // Update JWT token in cookies
            const { access_token, ...userData } = data;

            const cleanResponse = new NextResponse(JSON.stringify({ data: userData }), {
                status: 200,
                headers: {
                "Content-Type": "application/json",
                "Set-Cookie": `access_token=${access_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
                },
            });

            return cleanResponse;
        }

        return NextResponse.json(res_json, { status: fastapiResponse.status });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
