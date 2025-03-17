import { NextResponse } from "next/server";

// TODO:implement all the methods here
export async function POST(request: Request) {
  const data = await request.json();
  const message = `username: ${data.username}, password: ${data.password}`;

  return NextResponse.json({ message: message });
}
