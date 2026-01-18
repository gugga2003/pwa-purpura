import { NextResponse } from "next/server";
import { mockUser } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(mockUser);
}
