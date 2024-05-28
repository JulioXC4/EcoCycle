"use client";

import React, { useState } from "react";
import Link from "next/link";
import Login from "../Login/Login";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#e0e0d8] w-full h-24 flex justify-between items-center shadow-md z-20 px-4 md:px-8">
      <div className="flex justify-around items-center">
        <Link className="text-xl font-bold" href="/">
          <div className="m-2 h-16 w-44">
            <img
              src="/images/ecocycle.webp"
              alt="Logo Ecocycle"
              className="h-full w-full object-contain transition-transform transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <div
        className={`w-full md:w-1/3 md:flex md:items-center md:justify-end ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col md:flex-row md:justify-around md:items-center w-full">
          <Link
            href="/"
            className={`py-2 rounded-3xl text-center text-2xl md:text-3xl hover:text-[#61b37f] transition-all duration-500 ${
              pathname === "/" ? "text-[#006B27]" : "text-black"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className={`py-2 rounded-3xl text-center text-2xl md:text-3xl hover:text-[#61b37f] transition-all duration-500 ${
              pathname === "/about" ? "text-[#006B27]" : "text-black"
            }`}
          >
            Objetivo
          </Link>
          <Link
            href="/team"
            className={`py-2 rounded-3xl text-center text-2xl md:text-3xl hover:text-[#61b37f] transition-all duration-500 ${
              pathname === "/team" ? "text-[#006B27]" : "text-black"
            }`}
          >
            Equipo
          </Link>
          <button
            className="py-2 px-4 rounded text-center text-2xl md:text-3xl bg-[#00C889] text-white mt-2 md:mt-0 md:ml-4"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
      </div>
      {showModal && <Login setShowModal={setShowModal} />}
    </nav>
  );
};

export default Navbar;
