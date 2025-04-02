import { BASE_URL } from "@/lib/constant";

export async function POST(request: Request) {
  const data = await request.json();
  // const message = `name: ${data.fullName}, username: ${data.username}, email:${data.email}, password: ${data.password}`;
  const requestBody = {
    userName: data.username,
    email: data.email,
    password: data.password,
    type: "standard",
    // creationDate: new Date().toISOString(),
  };

  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
}
