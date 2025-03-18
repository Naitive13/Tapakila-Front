"use client";

import { loginAction } from "./actions";

export default function Login() {
  return (
    <>
      <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
        <img
          src="https://www.vibrantacademy.com/user/img/login.png"
          alt="login_image"
        />
      </div>

      <form action={loginAction}>
        <div className="flex flex-col justify-center py-5 mx-auto w-full md:p-10 md:py-0 lg:w-1/2">
          <h1 className="text-2xl font-semibold text-center sm:text-3xl text-primary">
            Welcome Back
          </h1>
          <div className="mt-5 w-full sm:mt-8">
            <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
              <input
                type="text"
                name="username"
                placeholder="Enter Your Username"
                className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
              />
              <input
                type="Password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
              />
              <div className="flex flex-col gap-2 justify-between items-center md:flex-row md:gap-4">
                <button
                  type="submit"
                  className="btn btn-active btn-primary btn-block max-w-6/12"
                >
                  Log In
                </button>
                <button className="btn btn-outline btn-primary btn-block max-w-6/12">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
