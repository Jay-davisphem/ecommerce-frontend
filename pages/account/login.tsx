import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Title from "../../components/Title";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { ImSpinner } from "react-icons/im";

const rootUrl = "http://localhost:8000";

export default function Login() {
  const { dispatch } = useContext(AuthContext);

  const [cred, setCred] = useState({
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleInputChange = (e) => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setCred({ ...cred, isSubmitting: true });
    axios
      .post(`${rootUrl}/login/`, {
        username: cred.username,
        password: cred.password,
      })
      .then((res) => {
        setCred({ ...cred, isSubmitting: false });
        dispatch({
          type: "LOGIN",
          payload: {
            cred: { username: cred.username, password: cred.password },
            token: res.data.token,
          },
        });
      })
      .catch((err) => {
        setCred({
          ...cred,
          isSubmitting: false,
          errorMessage: err.message || err.response.data.statusText,
        });
      });
  };

  return (
    <div className="container align-middle mx-auto max-w-xs">
      <Title title="Sign In" />
      <h3 className="text-main text-xs">Please Log in to your account!</h3>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSignIn}
      >
        <Input
          id="username"
          placeholder="Username"
          value={cred.username}
          onChange={handleInputChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={cred.password}
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-between">
          <button
            className={`text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline 
              ${
                cred.isSubmitting
                  ? "bg-blue text-2xl px-8 disabled"
                  : "bg-sec hover:bg-blue px-4"
              }`}
            type="submit"
          >
            {cred.isSubmitting ? (
              <ImSpinner className="text-main animate-spin" />
            ) : (
              "Sign In"
            )}
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
