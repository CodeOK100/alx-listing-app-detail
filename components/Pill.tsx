import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return(
    <button 
    onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
    >
      {label}
    </button>

  );
}

export default Pill;