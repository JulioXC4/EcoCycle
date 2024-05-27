import React from "react";
import Link from "next/link";

import { FaInfoCircle } from "react-icons/fa";
import { PiBookBookmarkFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 w-72 text-white flex flex-col items-center py-6 space-y-6 shadow-lg">
      <Link href="/dashboard" className="group w-full">
        <div className="flex flex-col items-center w-full cursor-pointer p-4 transition duration-300 hover:bg-gray-700 rounded-lg">
          <FaInfoCircle className="w-10 h-10 text-green-400 group-hover:text-green-300" />
          <span className="mt-2 text-sm font-semibold group-hover:text-gray-200">
            Información
          </span>
        </div>
      </Link>
      <Link href="/dashboard/activity" className="group w-full">
        <div className="flex flex-col items-center w-full cursor-pointer p-4 transition duration-300 hover:bg-gray-700 rounded-lg">
          <PiBookBookmarkFill className="w-10 h-10 text-green-400 group-hover:text-green-300" />
          <span className="mt-2 text-sm font-semibold group-hover:text-gray-200">
            Actividades
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
