import { useState } from "react"
import { Footer } from "./footer"
import { CgPill } from "react-icons/cg"
import { Link } from "react-router-dom"
import AccordionList from "./AcordionLista"
import AccordionMedic from "./AccordionMedic"
import { FaPlus } from "react-icons/fa"
import useMedicines from "../store/useMedicines"
import {useEffect} from 'react'

const MedicinesList = () => {

  const { medicines } = useMedicines()

  useEffect(() => {
    console.log(medicines)
  }, [medicines])



  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }
 
  
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
          <div className="relative p-2 rounded-full border-2 border-white">
            <CgPill className="text-3xl" />
            <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Medicamentos
      </h2>
      <div className="flex-1 bg-white">
      {
        medicines ?
        medicines.map((elem, i) => (
          <AccordionMedic key={i} open={open === i}
          toggle={() => toggle(i)}
          nombre={elem.name}
          dosis={elem.doseFrequency}
          hora={elem.firstDoseHour}
          cantidad={elem.inventary}
          next={elem.next}
          />
          ))
          :

          <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl">No hay medicamentos</h1>
          </div>
      }
      </div>

      <Footer />

    </div>

  )
}

export default MedicinesList