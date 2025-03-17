import { NextResponse } from "next/server";

// Dummy database
const users = [{ id: 1, name: "John Doe", email: "john@example.com" }];

// GET request to fetch user data
export async function GET() {
    return NextResponse.json(users);
}

// POST request to add a new user
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newUser = { id: users.length + 1, ...body };
        users.push(newUser);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
}