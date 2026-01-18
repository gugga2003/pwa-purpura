import { NextResponse } from "next/server";
import { mockTasks } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockTasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ id: `task-${Date.now()}`, ...body });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json({ updated: true, ...body });
}
