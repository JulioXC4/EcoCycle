"use client";

import Link from "next/link";
import React, { useState } from "react";
import Login from "../Login/Login";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-h-screen bg-[#EEEEE2]  rounded-lg shadow-lg w-full max-w-9xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-full p-8 flex flex-col justify-evenly">
          <div className="m-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-8">EcoCycle</h1>
            <p className="text-3xl text-gray-600">
              Utiliza nuestra app hoy y sé parte del cambio hacia una ciudad más
              limpia y sostenible. Con EcoGestión Urbana, juntos podemos reducir
              los residuos urbanos y proteger nuestro medio ambiente. ¡Comienza
              a hacer la diferencia ahora!
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#fce7cb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-4 border-[#00C889] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-[#006B27] mb-2">
                Optimización de Recolección
              </h2>
              <p className="text-gray-600 font-serif">
                Nuestra app optimiza las rutas de recolección de residuos para
                reducir el tiempo y el costo, mejorando la eficiencia de los
                servicios de limpieza urbana.
              </p>
            </div>
            <div className="bg-[#fce7cb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-4 border-[#00C889]  transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-[#006B27] mb-2">
                Reciclaje Eficiente
              </h2>
              <p className="text-gray-600 font-serif">
                Facilitamos el reciclaje proporcionando información y recursos
                para separar correctamente los residuos, promoviendo una cultura
                de sostenibilidad.
              </p>
            </div>
            <div className="bg-[#fce7cb] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-4 border-[#00C889]  transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-[#006B27] mb-2">
                Compromiso Comunitario
              </h2>
              <p className="text-gray-600 font-serif">
                Fomentamos la participación comunitaria mediante campañas
                educativas y eventos para crear conciencia sobre la importancia
                de la gestión de residuos.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-[#00C889] text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              onClick={() => setShowModal(true)}
            >
              Empezar
            </button>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col items-center justify-center p-8 bg-green-600 relative">
          <img
            src="/images/reciclaje2.jpg"
            alt="Imagen de reciclaje"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {showModal && <Login setShowModal={setShowModal} />}
    </div>
  );
};

export default LandingPage;
