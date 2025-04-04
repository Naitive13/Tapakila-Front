"use client";

import Link from "next/link";
import { loginAction } from "./actions";

export default function Login() {
  return (
    <form
      action={loginAction}
      className="flex justify-between items-stretch py-5 px-5 w-8/12 rounded-md border xl:px-5 xl:max-w-7xl bg-base-100 drop-shadow-xl border-black/20"
    >
      <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
        <img
          src="https://www.vibrantacademy.com/user/img/login.png"
          alt="login_image"
        />
      </div>

      <div className="flex flex-col justify-center py-5 mx-auto w-full md:p-10 md:py-0 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-center sm:text-3xl text-primary">
          Welcome Back
        </h1>
        <div className="mt-5 w-full sm:mt-8">
          <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
            />
            <input
              type="Password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
            />
            <div className="flex flex-col gap-x-2 gap-y-2 justify-between items-center md:flex-row">
              <button
                type="submit"
                className="w-6/12 btn btn-active shrink btn-primary md:max-w-12/12"
              >
                Log In
              </button>
              <button className="w-6/12 btn btn-outline shrink btn-primary md:max-w-12/12">
                <Link href="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
