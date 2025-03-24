export async function loginAction(e: FormData) {
  const data = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: e.get("email"),
      password: e.get("password"),
    }),
  });
  if (data.ok) {
    alert("Login successful");
    const result = await data.json();
    console.log(result);
  } else {
    alert("Login failed");
  }
}
