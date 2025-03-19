"use client";

import { signupAction } from "./actions";

export default function Login() {
  return (
    <form
      action={signupAction}
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
          Create Your Account
        </h1>
        <div className="mt-5 w-full sm:mt-8">
          <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
                name="lastname"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
              name="username"
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
              name="email"
            />
            <input
              type="Password"
              placeholder="Enter Your Password"
              className="w-full text-base-content input input-bordered input-primary placeholder:text-base-300"
              name="password"
            />
            <div className="flex gap-1.5 justify-start items-center pl-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox-xs checkbox-primary"
                  />
                </label>
              </div>
              <h3 className="flex items-center text-xs whitespace-nowrap text-base-content">
                I agree to the
                <span className="text-primary">&nbsp;Terms</span>
                &nbsp;and
                <span className="text-primary">&nbsp;Privacy Policy</span>.
              </h3>
            </div>
            <div className="flex flex-col gap-x-2 gap-y-2 justify-between items-center md:flex-row">
              <button
                type="submit"
                className="w-6/12 btn btn-active shrink btn-primary md:max-w-12/12"
              >
                Create Account
              </button>
              <button className="w-6/12 btn btn-outline shrink btn-primary md:max-w-12/12">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
