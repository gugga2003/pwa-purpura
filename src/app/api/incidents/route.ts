import { NextResponse } from "next/server";
import { mockIncidents } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockIncidents);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ id: `INC-${Date.now()}`, ...body });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json({ updated: true, ...body });
}
