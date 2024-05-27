import React from "react";
import LandingPage from "./components/Landing Page/LandingPage";
import Navbar from "./components/Landing Page/Navbar";

const page = async () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default page;
