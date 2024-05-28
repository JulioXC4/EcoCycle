"use client";
import React from "react";
import Navbar from "../components/Landing Page/Navbar";

const About = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="bg-[#EEEEE2] min-h-screen w-full flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
          <div className="md:w-1/2 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              Nuestro Objetivo
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              En EcoCycle, nos dedicamos a proporcionar soluciones innovadoras y
              sostenibles para la gestión integral de residuos urbanos. Nuestro
              enfoque se centra en desarrollar tecnologías y estrategias que
              optimicen la recolección, el reciclaje y la eliminación adecuada
              de residuos, con el objetivo de reducir el impacto ambiental y
              mejorar la calidad de vida en las ciudades. Con un equipo
              comprometido con la innovación y el cuidado del medio ambiente,
              estamos en constante búsqueda de soluciones que impulsen un cambio
              positivo en nuestras comunidades urbanas.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative">
            <img
              src="/images/reciclaje.webp"
              alt="Imagen de reciclaje"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
