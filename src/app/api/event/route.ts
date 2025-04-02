import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/constant";

export async function GET(request: Request) {
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
