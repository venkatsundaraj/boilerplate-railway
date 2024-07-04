import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse(JSON.stringify("Hello world"), { status: 200 });
}
