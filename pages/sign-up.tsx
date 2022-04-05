import React, { useState, useEffect } from "react";

function SignUp() {
  return (
    <div className="container mx-auto align-middle max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first_name"
          type="text"
          placeholder="First Name"
        />

        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last_name"
          type="text"
          placeholder="Last Name"
        />

        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />

        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />

        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Confirm Password"
        />

        <div className="text-left">
          <input
            className="mr-2 leading-tight"
            id="is_vendor"
            type="checkbox"
          />
          <span className="text-sm text-grey">I want to be a vendor!</span>
        </div>

        <button
          className="bg-sec hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
