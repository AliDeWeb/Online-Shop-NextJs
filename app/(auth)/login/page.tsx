import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="py-5 min-h-[100dvh] flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div>
          <h1 className="text-[#555555] font-poppins font-bold text-center text-3xl">
            Log In
          </h1>
          <p className="text-[#777777] font-poppins font-light text-sm text-center mt-4">
            Best place to buy and sell digital products
          </p>
        </div>
        <div className="mt-[30px] w-full flex justify-center px-5">
          <form className="py-[34px] px-[38px] border border-solid border-[#ededed] sm:w-[500px] w-full flex flex-col">
            <label
              htmlFor="phone"
              className="font-poppins font-bold text-[#444444] mb-2.5"
            >
              Phone Number*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone num..."
              className="outline-none mb-[30px] px-4 h-[50px] border border-solid border-[#eeeeee] font-poppins text-sm text-[#777777]"
            />

            <label
              htmlFor="password"
              className="font-poppins font-bold text-[#444444] mb-2.5"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password..."
              className="outline-none mb-[30px] px-4 h-[50px] border border-solid border-[#eeeeee] font-poppins text-sm text-[#777777]"
            />

            <Link
              href="/"
              className="text-[#444444] font-poppins font-normal text-sm"
            >
              Forgot Password?
            </Link>

            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className="flex items-center justify-center h-10 w-[150px] font-poppins font-bold bg-[#3474d4] text-xl text-white"
              >
                LOGIN
              </button>
              <Link
                className="flex items-center justify-center h-10 w-[150px] font-poppins font-bold bg-[#555555] text-xl text-white"
                href="/register"
              >
                REGISTER
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
