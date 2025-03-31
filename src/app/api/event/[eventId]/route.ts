import { NextResponse } from "next/server";
import { BASE_URL } from "../../constant";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ eventId: string }> },
) {
  const { eventId } = await params;
  if (eventId == "test") {
    const event = {
      title: "Test Event",
      eventType: "Concert",
      ticketNumber: 100,
      eventPoster: "https://placehold.co/1200x1200",
      eventId: "550e8400-e29b-41d4-a716-446655440000",
    };
    return NextResponse.json(event);
  } else {
    const result = await fetch(`${BASE_URL}/events`);

    if (result.ok) {
      const data = await result.json();
      console.log(data);
      return Response.json(data);
    } else {
      console.log(result.status);
      return NextResponse.error();
    }
  }
}
