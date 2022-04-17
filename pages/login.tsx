import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import axios from "axios";
function Login() {
  const [cred, setCred] = useState(returnCred("myAccountCredentials"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (!(cred.username === "" && cred.password === ""))
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}login/`, data)
        .then((res) => {
          setCred({ ...cred, token: res.data.token });
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setIsError(true);
        });
  }, []);

  function returnCred(key) {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem(key);
      if (val === null) return { username: "", password: "", token: "" };
      else {
        if (!isLoggedIn) {
          //setIsLoggedIn(true);
          location.href = "/foods/";
        }
        return JSON.parse(val);
      }
    }
    return { username: "", password: "", token: "" };
  }
  const storeCred = (username, password, token) => {
    localStorage.setItem(
      "myAccountCredentials",
      JSON.stringify({ username, password, token })
    );
    return localStorage.myAccountCredentials;
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Submission");
    if (cred.username !== "" && cred.password !== "")
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}login/`, data)
        .then((res) => {
          setCred({ ...cred, token: res.data.token });
          setIsLoggedIn(true);

          if (typeof window !== "undefined") {
            location.href = "/foods/";
            storeCred(cred.username, cred.password, cred.token);
          }
          console.log(res.data);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setIsError(true);
          console.log(err.message, "at submission");
        });
  };
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (e.target.id === "username") {
      setCred({ ...cred, username: val });
      console.log("isError", isError, "isLoggedIn", isLoggedIn);
    } else {
      setCred({ ...cred, password: val });
      console.log("isError", isError, "isLoggedIn", isLoggedIn);
    }
  };

  const data = { username: cred.username, password: cred.password };

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
