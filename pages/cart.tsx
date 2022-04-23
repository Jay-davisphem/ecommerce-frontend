import Head from "next/head";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Cart() {
  const [myCart, setMyCart] = useState("");
  const [cartCount, setCartCount] = useState<number>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const val = JSON.parse(localStorage.getItem("count"));
      setCartCount(val !== null ? val : 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("yus");
      setMyCart(val);
    }
  }, [cartCount]);
  const clearMemory = () => {
    if (typeof window !== "undefined") localStorage.clear();
  };

  //const startCount
  const changeCount = (key, value) => {
    if (typeof window !== "undefined") {
      setCartCount((prev) => prev + 1);
      localStorage.setItem(key, value + cartCount);
      localStorage.setItem("count", JSON.stringify(cartCount));
    }
  };

  return (
    <>
      <Head>
        <title>Carts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* <button onClick={() => changeCount("yus", "gbegiri")}>setCount</button>
      <br />
      <button onClick={clearMemory}>Clear Mem</button>
      {console.log(loc, "uhuhgfg")} */}
      {myCart !== null ? <FilledCart val={myCart} /> : <EmptyCart />}
    </>
  );
}
