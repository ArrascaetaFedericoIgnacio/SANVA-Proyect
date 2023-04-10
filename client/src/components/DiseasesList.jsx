import React, { useState } from "react";
import { Footer } from "./footer";
import { HiOutlineHeart, HiCalendar } from "react-icons/hi";
import { BsBuildings } from "react-icons/bs";
import AccordionData from "./AccodionData";
import {BsVirus} from "react-icons/bs"

const Diseases = () => {
  return (
    <div className="max-w-360 mx-auto h-full bg-[#6abce2]">
      <h2 className="text-center text-2xl font-bold mt-20  bg-[#6abce2]">Enfermedades</h2>
      <div className=" bg-[#6abce2]">
        <p className="text-center text-sm mt-5">Enfermedades</p>
      </div>
      <div className="flex mt-20 px-5 mb-10 bg-[#6abce2] justify-center">
       {/* usa el icono de virus */}
       <div classname="p-2 rounded-full border-2 border-white">
        <BsVirus className="text-3xl text-white" />
       </div>
        <div classname="p-2 rounded-full border-2 border-white">
        <BsVirus className="text-3xl text-white" />
        </div>

      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="font-bold text-lg my-0 w-3/5">Agregar</p>
      </div>
      
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg my-0 w-3/5 text-black">Diabetes</p>
          <p className="text-right text-sm my-0 w-2/5 text-black">Dr. Juan Pérez</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5 text-black">Hipertensión</p>
          <p className="text-right text-sm my-0 w-2/5 text-black">Dr. Marta García</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5 text-black">Asma</p>
          <p className="text-right text-sm my-0 w-2/5 text-black">Dr. Ana Flores</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5 text-black">Artritis</p>
          <p className="text-right text-sm my-0 w-2/5 text-black">Dr. Luis González</p>
        </div>
      </div>
    </div>

    
    );
};

export default Diseases;