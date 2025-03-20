import { BASE_URL } from "../constant";

// TODO:implement all the methods here
export async function POST(request: Request) {
  const data = await request.json();
  const requestBody = {
    email: data.email,
    password: data.password,
  };

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
}
