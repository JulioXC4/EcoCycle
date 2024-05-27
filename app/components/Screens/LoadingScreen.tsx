"use client";

import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EEEEE2] ">
      <div className="h-24 w-56">
        <img
          src="/images/ecocycle.webp"
          alt="Logo Ecocycle"
          className="h-full w-full object-contain transition-transform transform hover:scale-105"
        />
      </div>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00C889] m-4"></div>
    </div>
  );
};

export default LoadingScreen;
