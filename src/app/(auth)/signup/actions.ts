export async function signupAction(e: FormData) {
  const data = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({
      username: e.get("username"),
      email: e.get("email"),
      password: e.get("password"),
    }),
  });
  alert(data.status);
}
