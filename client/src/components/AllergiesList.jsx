import { useState } from "react";
import { Footer } from "./footer";
import { BsVirus } from "react-icons/bs"
import { Link } from "react-router-dom";

const AllergiesList = () => {
  
  return (
    <div className="h-full mb-[54px] text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Alergias</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/">
          <div className="p-2 rounded-full border-2 border-white">
            <BsVirus className="text-3xl" />
          </div>
        </Link>
        <Link to="/">
          <div className="p-2 rounded-full border-2 border-white">
            <BsVirus className="text-3xl" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Alergias
      </h2>
      <Footer />
    </div>
  )
}

export default AllergiesList;