import { AppProps } from "next/app";
import { ReactElement, useState, useEffect } from "react";
import "../styles/global.scss";
import Layout from "../components/Layout";
import axios from "axios";

export default function App({ Component, pageProps }): ReactElement {
  const [cred, setCred] = useState(returnCred("myAccountCredentials"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (cred) => {
    if (
      cred.username !== "" &&
      cred.password !== "" &&
      cred.token === undefined
    )
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}login/`, cred)
        .then((res) => {
          setCred({ ...cred, token: res.data.token });
          setIsLoggedIn(true);

          if (typeof window !== "undefined") {
            location.href = "/foods/";
          }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message, "at submission");
        });
    else if (cred.token !== undefined) {
      setCred(cred);
      if (typeof window !== "undefined") {
        localStorage.setItem(JSON.stringify(cred));
        setCred(cred);
        setIsLoggedIn(true);
      }
    }
  };
  function returnCred(key) {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem(key);
      if (val === null) return { username: "", password: "", token: "" };
      else {
        if (!isLoggedIn) {
          setIsLoggedIn(true);
          location.href = "/foods/";
        }
        return JSON.parse(val);
      }
    }
    return { username: "", password: "", token: "" };
  }
  return (
    <Layout>
      <Component
        {...pageProps}
        cred={cred}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        logIn={logIn}
      />
    </Layout>
  );
}
