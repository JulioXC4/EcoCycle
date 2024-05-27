"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "@/app/components/Screens/LoadingScreen";

const Page = () => {
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

  const activities = [
    { id: 1, type: "Recolección", time: "10:00 AM", date: "2024-06-01" },
    { id: 2, type: "Reciclaje", time: "12:00 PM", date: "2024-06-02" },
    { id: 3, type: "Recolección", time: "09:30 AM", date: "2024-06-03" },
  ];

  const schedule = [
    { day: "Lunes", time: "10:00 AM - 12:00 PM" },
    { day: "Martes", time: "09:00 AM - 11:00 AM" },
    { day: "Miércoles", time: "08:30 AM - 10:30 AM" },
    { day: "Jueves", time: "11:30 AM - 01:30 PM" },
    { day: "Viernes", time: "12:00 PM - 02:00 PM" },
  ];

  return (
    <div className="flex flex-col bg-[#f1e5d1] min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold bg-gray-200 px-6 py-4">
            Actividades
          </h2>
          <div className="overflow-x-auto">
            <table className="text-center w-full table-auto">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Tipo</th>
                  <th className="px-4 py-2">Hora</th>
                  <th className="px-4 py-2">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{activity.id}</td>
                    <td className="px-4 py-2">{activity.type}</td>
                    <td className="px-4 py-2">{activity.time}</td>
                    <td className="px-4 py-2">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold bg-gray-200 px-6 py-4">Horario</h2>
          <div className="overflow-x-auto">
            <table className="text-center w-full table-auto">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-4 py-2">Día</th>
                  <th className="px-4 py-2">Hora</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{item.day}</td>
                    <td className="px-4 py-2">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
