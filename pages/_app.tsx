import { ReactElement, useState, useEffect, useReducer } from "react";
import "../styles/global.scss";
import Layout from "../components/Layout";
import Login from '../components/Login'
import AuthContext from "../context/AuthContext";
import reducer from "../reducer/authReducer";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  cred: null,
  token: null,
};
export default function App({ Component, pageProps }): ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Layout>
        {!state.isLoggedIn ? <Login /> : <Component {...pageProps} />}
      </Layout>
    </AuthContext.Provider>
  );
}
