import { useState } from "react"
import { Footer } from "./footer"
import { CgPill } from "react-icons/cg"
import { Link } from "react-router-dom"
import AccordionList from "./AcordionLista"
import AccordionMedic from "./AccordionMedic"

const MedicinesList = () => {

  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }
  const ListaMedicamentos = [
    {
      nombre: "Nombre",
      dosis: "Proxima dosis",
      hora: "10:00 AM",
      cantidad: "2 pildoras",
      next: "Cada 6 horas",
    },
    {
      nombre: "Nombrea",
      dosis: "Proxima dosis",
      hora: "10:00 AM",
      cantidad: "2 pildoras",
      next: "Cada 6 horas",
    },
    {
      nombre: "Nombreas",
      dosis: "Proxima dosis",
      hora: "10:00 AM",
      cantidad: "2 pildoras",
      next: "Cada 6 horas",
    },
    {
      nombre: "Nombreasd",
      dosis: "Proxima dosis",
      hora: "10:00 AM",
      cantidad: "2 pildoras",
      next: "Cada 6 horas",
    },
    {
      nombre: "Nombreasda",
      dosis: "Proxima dosis",
      hora: "10:00 AM",
      cantidad: "2 pildoras",
      next: "Cada 6 horas",
    },
  ]
  
  return (
    <div className="h-screen flex flex-col text-white bg-[#6abce2]">
      <h1 className="py-6 text-[40px]">Medicamentos</h1>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/medicineslist">
          <div className="p-2 rounded-full border-2 border-white">
            <CgPill className="text-3xl" />
          </div>
        </Link>
        <Link to="/DrugsForm">
          <div className="p-2 rounded-full border-2 border-white">
            <CgPill className="text-3xl" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Medicamentos
      </h2>
      <div className="flex-1 bg-white">
      {
        ListaMedicamentos?.map((elem, i) => (
          <AccordionMedic key={i} open={open === i}
          toggle={() => toggle(i)}
          nombre={elem.nombre}
          dosis={elem.dosis}
          hora={elem.hora}
          cantidad={elem.cantidad}
          next={elem.next}
          />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default MedicinesList;