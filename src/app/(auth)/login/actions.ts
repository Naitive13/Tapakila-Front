export async function loginAction(e: FormData) {
  const data = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: e.get("email"),
      password: e.get("password"),
    }),
  });
  const result = await data.json();
  alert(result.token);
  localStorage.setItem("token", result.token);
}
