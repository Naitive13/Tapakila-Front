import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  if (data.eventId == "test") {
    if (data.ticketAmount == "5") {
      return NextResponse.json(
        { error: "You have reached the maximum number of reservation" },
        { status: 500 },
      );
    }
    if (data.ticketType == "VIP") {
      return NextResponse.json(
        { error: "VIP ticket is not available" },
        { status: 500 },
      );
    }
    return NextResponse.json({ message: "reservation successful" });
  }
}
