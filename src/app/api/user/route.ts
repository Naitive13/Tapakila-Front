import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { BASE_URL } from "@/lib/constant";

export async function PUT(request: Request) {
  const cookieStore = await cookies();
  const data = await request.json();
  const body = {
    userName: data.username,
    email: data.email,
    userId: data.userId,
  };

  const response = await fetch(`${BASE_URL}/user/me`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    const result = await response.json();
    return NextResponse.json(result);
  } else {
    console.log(response.status);
    return NextResponse.error();
  }
}

export async function GET() {
  // mock data because no api yet
  // const pastReservation = {
  //   ticketId: "32d8053c-4768-4b71-b327-16429ca96ec6",
  //   userId: "550e8400-e29b-41d4-a716-446655440000",
  //   reservationDate: "2025-02-14 10:00",
  //   reservationId: "8aaf619d-b844-4f77-b775-0343da9d6e78",
  // };
  // const upcomingReservation1 = {
  //   ticketId: "51eee0e4-70fe-4ea4-b625-33f7b6795c34",
  //   userId: "550e8400-e29b-41d4-a716-446655440000",
  //   reservationDate: "2025-02-14 10:00",
  //   reservationId: "df7e4fab-df3f-4015-bfc5-099adf6ee6eb",
  // };
  // const upcomingReservation2 = {
  //   ticketId: "dad5e2d3-abfd-4cac-a15a-e1c29081fc14",
  //   userId: "550e8400-e29b-41d4-a716-446655440000",
  //   reservationDate: "2025-02-14 10:00",
  //   reservationId: "21703d00-47c7-4494-bd74-1053aca2064d",
  // };

  // const data = {
  //   uuid: "550e8400-e29b-41d4-a716-446655440000",
  //   username: "UsernameTest",
  //   email: "emailtest@gmail.com",
  //   role: "standard",
  //   creationDate: new Date("2025-01-01 11:00").toDateString(),
  //   reservations: [pastReservation, upcomingReservation1, upcomingReservation2],
  // };
  // return NextResponse.json(data);

  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
      },
    });
    if (response.ok) {
      // const result = await response.json();
      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
