import { useState } from "react"
import { Footer } from "./footer"
import { CgPill } from "react-icons/cg"
import { Link } from "react-router-dom"
import AccordionList from "./AcordionLista"

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
      nombre: "Covid-19",
      medico: "Dr. Juan Perez",
      medicamento: "Amoxilina",
      tratamiento: "c/8hs, 7 dias",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Ibra",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Fede",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. German",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
    {
      nombre: "Nombre",
      medico: "Dr. Denis",
      medicamento: "Medicamento",
      tratamiento: "Tratamiento",
    },
  ]
  
  return (
    <div className="h-full mb-[54px] text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Medicamentos</h2>
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
      {
        ListaMedicamentos?.map((elem, i) => (
          <AccordionList key={i} open={open === i}
            toggle={() => toggle(i)}
            title={elem.nombre}
            medico={elem.medico}
            medicamento={elem.medicamento}
            tratamiento={elem.tratamiento}
          />
        ))
      }
      <Footer />
    </div>
  )
}

export default MedicinesList;