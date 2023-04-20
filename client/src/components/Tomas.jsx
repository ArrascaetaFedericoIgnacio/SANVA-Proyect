import { Footer } from "./footer"
import { HiOutlineHeart, HiCalendar } from "react-icons/hi"
import { FaPlus } from "react-icons/fa"
import { BsBuildings } from "react-icons/bs"
import AccordionData from "./AccodionData"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const Tomas = () => {
   const accordionData = [
      {
         title: "04 de Abril de 2023",
         description: "lorem"
      },
      {
         title: "03/04/2023",
         description: "lorem"
      },
      {
         title: "02/04/2023",
         description: "lorem"
      },
      {
         title: "01/04/2023",
         description: "lorem"
      },
      {
         title: "31/03/2023",
         description: "lorem"
      },
      {
         title: "30/03/2023",
         description: "lorem"
      },
      {
         title: "29/03/2023",
         description: "lorem"
      },
   ]
   const [accordionTomas, SetAccordionTomas] = useState()
   useEffect(() => {
      const getTomas = localStorage.getItem('user')
      const getTomasParseado = JSON.parse(getTomas)
      console.log("get ->", getTomasParseado);
      // SetAccordionTomas(getTomas.user_takes)
   },[])
   console.log("ready ->", accordionTomas);
   
   const [open, setOpen] = useState(false)
   const toggle = (index) => {
      if (open === index) {
         return setOpen(null)
      }
      setOpen(index)
   }

   return (
      <div className="h-screen xl:h-full flex flex-col">
         <h1 className="py-6 bg-[#6abce2] text-white">Tomas</h1>
         <div className="pb-3 flex justify-center items-center gap-4 bg-[#6abce2] text-white">
            <Link to="/nuevatoma">
               <div className="relative p-1 rounded-full border-2 border-white">
                  <HiOutlineHeart className="text-4xl" />
                  <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.2rem] right-2" />
               </div>
            </Link>
            <div className="p-2 rounded-full border-2 border-white">
               <BsBuildings className="text-3xl" />
            </div>
            <div className="p-2 rounded-full border-2 border-white">
               <HiCalendar className="text-3xl" />
            </div>
         </div>
         <h2 className="text-xl py-2 bg-[#3982b8] text-white">
            Ultimas Tomas
         </h2>
         <div className="flex-1 bg-white">
            {
               accordionTomas ?
               accordionTomas.map((data, index) => (
                  <AccordionData key={index} open={index === open} toggle={() => toggle(index)} title={data.title} desc={data.description} />
                  ))
                  : <div className="py-14 flex flex-col gap-6 justify-center items-center">
                  <p className="font-semibold text-slate-600 text-[22px]">
                     No hay tomas...
                  </p>
                  <Link to="/nuevatoma">
                     <button className="font-medium rounded-2xl py-2 px-5 text-xl bg-[#0091cb]">
                        Añadir Nueva Toma
                     </button>
                  </Link>
                  </div>
            }
         </div>
         <Footer />
      </div>
   )
}

export default Tomas