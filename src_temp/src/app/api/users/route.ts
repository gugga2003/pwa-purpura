import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockUsers);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ id: `user-${Date.now()}`, ...body });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json({ updated: true, ...body });
}
