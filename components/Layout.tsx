// components/Layout.js

import Header from "./Header";
import Footer from "./Footer";
import FoodItem from "./FoodItem";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main className="flex-col text-center mt-4 mb-20">
      {children}
      </main>
      <Footer />
    </>
  );
}
