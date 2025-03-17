"use client";

import { loginAction } from "./actions";

export default function Login() {
  // return (
  //   <>
  //     <form action={loginAction}>
  //       <fieldset className="fieldset">
  //         <legend className="fieldset-legend">Username</legend>
  //         <input type="text" className="input" placeholder="" name="username" />
  //       </fieldset>

  //       <fieldset className="fieldset">
  //         <legend className="fieldset-legend">Password</legend>
  //         <input
  //           type="password"
  //           className="input"
  //           placeholder=""
  //           name="password"
  //         />
  //       </fieldset>
  //       <button>send</button>
  //     </form>
  //   </>
  // );
  return (
    <form action={loginAction}>
      <div className="flex justify-center items-center py-5 px-5 w-full min-h-screen">
        <div className="flex justify-between items-stretch py-5 px-5 w-8/12 rounded-md border xl:px-5 xl:max-w-7xl bg-base-100 drop-shadow-xl border-black/20">
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
                    <span className="text-primary">&nbsp;Privacy Policy</span>
                  </h3>
                </div>
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
        </div>
      </div>
    </form>
  );
}
