"use client";
import { useRef } from "react";

export default function Login() {
  // const handler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log({
  //     username: usernameRef.current?.value,
  //     password: passwordRef.current?.value,
  //     email: emailRef.current?.value,
  //     role: "standard",
  //     creationDate: new Date().toISOString(),
  //   });
  // };

  const handler = async (e: FormData) => {
    console.log({
      username: e.get("username"),
      password: e.get("password"),
      // email: e.get("email"),
      // role: "standard",
      // creationDate: new Date().toISOString(),
    });
  };

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form action={handler}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Username</legend>
          <input
            type="text"
            className="input"
            placeholder=""
            name="username"
            ref={usernameRef}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input"
            placeholder=""
            name="password"
            ref={passwordRef}
          />
        </fieldset>
        <button>send</button>
      </form>
    </>
  );
}
