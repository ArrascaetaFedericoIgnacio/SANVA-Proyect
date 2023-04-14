import React, { useState } from "react";
import { Footer } from "./footer";
import { FaBacterium } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import AccordionList from "./AcordionLista";
import { Link } from "react-router-dom";

const Diseases = () => {

  const [open, setOpen] = useState(false)
    const toggle = (index) => {
      if (open === index) {
        return setOpen(null)
      }
      setOpen(index)
  }
  const ListaEnfermdedades = [
    {
      nombre: "Covid-19",
      medico: "Dr. Juan Perez",
      medicamento: "Amoxilina",
      tratamiento: "c/8hs, 7 dias",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Ibra Cardozo",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Fede Arrascaeta",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. German German",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Denis Gabriel",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
  ]

  return (
    <div className="h-screen flex flex-col text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Enfermedades</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/DiseasesList">
          <div className="p-2 rounded-full border-2 border-white">
            <FaBacterium className="text-3xl" />
          </div>
        </Link>
        <Link to="/enfermedades">
          <div className="p-2 rounded-full border-2 border-white">
            <FaBacterium className="text-3xl" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Enfermedades
      </h2>
      <div className="flex-1 bg-white">
      {
        ListaEnfermdedades?.map((elem, i) => (
          <AccordionList key={i} open={open === i}
          toggle={() => toggle(i)}
          title={elem.nombre}
          medico={elem.medico}
          medicamento={elem.medicamento}
          tratamiento={elem.tratamiento}
          />
          ))
        }
      </div>
      <Footer />
    </div>

    
    );
};

export default Diseases;