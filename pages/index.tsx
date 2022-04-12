import Head from "next/head";
import { useEffect, useState } from "react";
/* Landing page */
export default function Home() {
  const [val, setVal] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(localStorage.getItem("myCart"), "eskelebete ti olebe");
      setVal(localStorage.getItem("myCart"));
    }
  }, [val]);

  return (
    <>
      <Head>
        <title>You will be satisfied</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-blue-400">Hello {val}</h1>
    </>
  );
}
