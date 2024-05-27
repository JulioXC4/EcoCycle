"use client";
import React from "react";
import Link from "next/link";

const Login = ({ setShowModal }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full h-auto sm:h-[55vh] flex flex-col justify-center items-center">
        <div className="h-16 w-44">
          <img
            src="/images/ecocycle.webp"
            alt="Logo Ecocycle"
            className="h-full w-full object-contain transition-transform transform hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="/dashboard"
            >
              Enviar
            </Link>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
