import { ReactElement, useState, useEffect, useReducer } from "react";
import "../styles/global.scss";
import Layout from "../components/Layout";
import Login from "./account/login";
import AuthContext from "../context/AuthContext";
import reducer from "../reducer/authReducer";
import axios from "axios";
import Home from "./index";
import SignUp from "./account/sign-up";
import Contact from "./contact-us";
import Foods from "./foods/index";
import About from "./about";

let initialState = {
  isLoggedIn: false,
  cred: null,
  token: null,
};

if (typeof window !== "undefined") {
  initialState = {
    isLoggedIn: localStorage.getItem("token") || false,
    cred: localStorage.getItem("cred"),
    token: localStorage.getItem("token"),
  };
}
export default function App({ Component, pageProps }): ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);
  let UsedComponent;
  if (!state.LoggedIn) {
    if (Component === SignUp) {
      UsedComponent = SignUp;
    } else if (Component === Home) {
      UsedComponent = Home;
    } else if (Component === Contact) {
      UsedComponent = Contact;
    } else if (Component === About) {
      UsedComponent = About;
    } else {
      UsedComponent = Login;
    }
  } else {
    if (Component === SignUp) {
      UsedComponent = Foods;
    } else if (Component === Login) {
      UsedComponent = Foods;
    } else {
      UsedComponent = Component;
    }
  }
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Layout>
        <UsedComponent {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  );
}
