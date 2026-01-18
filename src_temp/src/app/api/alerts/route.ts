import { NextResponse } from "next/server";
import { mockAlerts } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockAlerts);
}

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json({ updated: true, ...body });
}
