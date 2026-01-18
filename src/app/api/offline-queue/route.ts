import { NextResponse } from "next/server";
import { mockOfflineQueue } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockOfflineQueue);
}
