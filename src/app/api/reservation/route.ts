import { BASE_URL } from "@/lib/constant";
import { cookies } from "next/headers";
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
  } else {
    const cookieStore = await cookies();
    const userfecth = await fetch(`${BASE_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
      },
    });
    const userInfo = await userfecth.json();

    const body = {
      ...data,
      userId: userInfo.userId,
    };

    const postRequest = await fetch(`${BASE_URL}/reservations/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (postRequest.status == 200) {
      const response = await postRequest.json();
      return NextResponse.json(response);
    } else {
      if (postRequest.status == 404) {
        return NextResponse.json(
          { message: "no more ticket available" },
          { status: 404 },
        );
      }
      console.log("error");
      return NextResponse.error();
    }
  }
}
