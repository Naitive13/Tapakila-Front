import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { BASE_URL } from "@/lib/constant";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ eventId: string }> },
) {
  const { eventId } = await params;
  if (eventId == "test") {
    const event = {
      title: "Test Event",
      eventType: "Concert",
      totalTicket: 100,
      availableTicket: 90,
      eventPoster: "https://placehold.co/1200x1200",
      eventId: "550e8400-e29b-41d4-a716-446655440000",
      date: "2022-12-12",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum",
    };
    return NextResponse.json(event);
  } else {
    const result = await fetch(`${BASE_URL}/events/${eventId}`);

    if (result.ok) {
      const data = await result.json();
      const response = {
        title: data.eventTitle,
        eventType: data.eventType,
        totalTicket: 100,
        availableTicket: 90,
        eventPoster: data.eventPoster,
        eventId: data.eventId,
        date: new Date(data.eventDate).toString(),
        description:
          "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum",
      };
      return Response.json(response);
    } else {
      console.log(result.status);
      return NextResponse.error();
    }
  }
}
