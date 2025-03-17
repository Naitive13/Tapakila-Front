export async function loginAction(e: FormData) {
  const data = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      username: e.get("username"),
      password: e.get("password"),
    }),
  });
  const result = await data.json();
  alert(result.message);
}
