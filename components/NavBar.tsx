import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import Nav from "./Nav";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-main mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Food Specks
              </a>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <MdClose /> : <VscThreeBars />}
            </button>
          </div>
          <div
            className={
              "lg:flex md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <Nav />
          </div>
        </div>
      </nav>
    </>
  );
}
