"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "../../components/Screens/LoadingScreen";
import { FaRecycle, FaChartLine, FaUserFriends, FaStar } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchs = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchs();
  }, []);

  if (loading) return <LoadingScreen />;

  const dataRecyclingRates = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Recycling Rates",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#00C889",
        borderColor: "#00C889",
      },
    ],
  };

  const dataRecyclingByLocation = {
    labels: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
    datasets: [
      {
        label: "Recycling",
        data: [50, 30, 70, 40, 60],
        backgroundColor: "#00C889",
      },
    ],
  };

  return (
    <div className="flex flex-col bg-[#f1e5d1] w-full min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaRecycle className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Recolección</h2>
            <p className="text-gray-600">1250 kg recolectados</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaChartLine className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Reciclaje</h2>
            <p className="text-gray-600">850 kg reciclados</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <RiPlantFill className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Compostaje</h2>
            <p className="text-gray-600">400 kg compostados</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <FaStar className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Puntos</h2>
            <p className="text-gray-600">350 puntos de usuario</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Tendencias de Reciclaje</h2>
        <Line data={dataRecyclingRates} />
      </div>
    </div>
  );
};

export default Dashboard;
