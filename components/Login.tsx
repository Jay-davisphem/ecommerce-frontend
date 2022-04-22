import React, { useState } from "react";
import Input from "./Input";
import Title from "./Title";
function Login() {
  const [cred, setCred] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (e.target.id === "username") {
      setCred({ ...cred, username: val });
    } else {
      setCred({ ...cred, password: val });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <div className="container align-middle mx-auto max-w-xs">
      <Title title="Sign In" />
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSignIn}
      >
        <Input
          id="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-sec hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
