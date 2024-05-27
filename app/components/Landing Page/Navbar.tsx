"use client";

import React, { useState } from "react";
import Link from "next/link";
import Login from "../Login/Login";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className=" bg-[#e0e0d8] w-full h-24 flex justify-around items-center shadow-md z-20">
      <div className="w-1/3flex items-center">
        <Link className="text-xl font-bold" href="/">
          <div className="h-16 w-44">
            <img
              src="/images/ecocycle.webp"
              alt="Logo Ecocycle"
              className="h-full w-full object-contain transition-transform transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="w-2/3 flex justify-end items-center">
        <div className="flex justify-evenly items-center w-5/6">
          <Link
            href="/"
            className={`py-2 rounded-3xl text-center text-3xl hover:text-black w-0 hover:w-6 transition-all duration-500 ${
              pathname === "/"
                ? "text-[#006B27] py-2 rounded-3xl text-center text-3xl"
                : "text-black"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className={`py-2 rounded-3xl text-center text-3xl hover:text-black w-0 hover:w-6 transition-all duration-500 ${
              pathname === "/about"
                ? "text-[#006B27] py-2 rounded-3xl text-center text-3xl"
                : "text-black"
            }`}
          >
            Objetivo
          </Link>
          <button
            className="py-2 px-4 rounded text-center text-3xl bg-[#00C889] text-white "
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
        {showModal && <Login setShowModal={setShowModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
