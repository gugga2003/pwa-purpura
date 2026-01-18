import { NextResponse } from "next/server";
import { mockKpis } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockKpis);
}
