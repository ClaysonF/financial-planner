import { NextResponse } from "next/server";

// Dummy database
const records = [
    { id: 1, userId: 1, type: "income", amount: 5000, category: "Salary" },
];

// GET request to fetch financial records
export async function GET() {
    return NextResponse.json(records);
}

// POST request to add a new financial record
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newRecord = { id: records.length + 1, ...body };
        records.push(newRecord);
        return NextResponse.json(newRecord, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
}