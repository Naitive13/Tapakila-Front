import { cookies } from "next/headers";
import { BASE_URL } from "../constant";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const requestBody = {
    email: data.email,
    password: data.password,
  };

  const result = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (result.ok) {
    const data = await result.json();
    const cookieStore = await cookies();
    const response = cookieStore.set("accessToken", data.token);
    return Response.json(response);
  } else {
    return NextResponse.error();
  }
}
