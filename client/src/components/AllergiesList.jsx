import { useState } from "react";
import { Footer } from "./footer";
import { BsVirus } from "react-icons/bs"
import { Link } from "react-router-dom";
import AccordionList from "./AcordionLista";
import useAllergies from "../store/useAllergies";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";



const AllergiesList = () => {
  
  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  const { allergies } = useAllergies();

  useEffect(() => {
    console.log("allergies ->", allergies);
  }, [allergies]);

  const ListaAlergia = [
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    }
  ]
  
  return (
    <div className="h-screen flex flex-col text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Alergias</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/allergieslist">
          <div className="p-2 rounded-full border-2 border-white">
            <BsVirus className="text-3xl" />
          </div>
        </Link>
        <Link to="/nuevaAlergia">
          <div className="relative p-2 rounded-full border-2 border-white">
            <BsVirus className="text-3xl" />
            <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Alergias
      </h2>
      <div className="flex-1 bg-white">
        {allergies.length > 0 ? (
          allergies.map((allergy, i) => (
            <AccordionList
              key={i}
              open={open === i}
              toggle={() => toggle(i)}
              title={allergy.allergieName}
              medico={allergy.vaccine}
              medicamento={allergy.inventory}
              tratamiento={allergy.vaccineFrequency}
            />
          ))
        ) : 
        <div className="py-14 flex flex-col gap-6 justify-center items-center">
            <p className="font-semibold text-slate-600 text-[22px]">
            No hay Alergias...
            </p>
          <Link to="/nuevaAlergia">
            <button className="font-medium rounded-2xl py-2 px-5 text-xl bg-[#0091cb]">
              Añadir Alergia
            </button>
          </Link>
        </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default AllergiesList;