// components/Layout.js

import Header from "./Header";
import Footer from "./Footer";
import FoodItem from "./FoodItem";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main className="min-h-screen text-center">
      {children}
      </main>
      <Footer />
    </>
  );
}
