import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: 'Ekka - Register',
};

const Register = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center py-5">
      <div className="flex w-full flex-col items-center">
        <div>
          <h1 className="text-center font-poppins text-3xl font-bold text-[#555555]">
            Register
          </h1>
          <p className="mt-4 text-center font-poppins text-sm font-light text-[#777777]">
            Best place to buy and sell digital products
          </p>
        </div>
        <div className="mt-[30px] flex w-full justify-center px-5">
          <form className="flex w-full flex-col border border-solid border-[#ededed] px-[38px] py-[34px] sm:w-[500px]">
            <label
              htmlFor="phone"
              className="mb-2.5 font-poppins font-bold text-[#444444]"
            >
              Phone Number*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone num..."
              className="mb-[30px] h-[50px] border border-solid border-[#eeeeee] px-4 font-poppins text-sm text-[#777777] outline-none"
            />

            <label
              htmlFor="email"
              className="mb-2.5 font-poppins font-bold text-[#444444]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email add..."
              className="mb-[30px] h-[50px] border border-solid border-[#eeeeee] px-4 font-poppins text-sm text-[#777777] outline-none"
            />

            <label
              htmlFor="name"
              className="mb-2.5 font-poppins font-bold text-[#444444]"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name..."
              className="mb-[30px] h-[50px] border border-solid border-[#eeeeee] px-4 font-poppins text-sm text-[#777777] outline-none"
            />

            <label
              htmlFor="password"
              className="mb-2.5 font-poppins font-bold text-[#444444]"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password..."
              className="mb-[30px] h-[50px] border border-solid border-[#eeeeee] px-4 font-poppins text-sm text-[#777777] outline-none"
            />

            <Link
              href="/"
              className="font-poppins text-sm font-normal text-[#444444]"
            >
              Forgot Password?
            </Link>

            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className="flex h-10 w-[150px] items-center justify-center bg-[#3474d4] font-poppins text-xl font-bold text-white"
              >
                REGISTER
              </button>
              <Link
                className="flex h-10 w-[150px] items-center justify-center bg-[#555555] font-poppins text-xl font-bold text-white"
                href="/login"
              >
                LOGIN
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
