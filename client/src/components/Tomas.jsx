import { Footer } from "./footer"
import { HiOutlineHeart, HiCalendar } from "react-icons/hi"
import { BsBuildings } from "react-icons/bs"
import AccordionData from "./AccodionData"
import { useState } from "react"
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
   const [open, setOpen] = useState(false)
   const toggle = (index) => {
      if (open === index) {
         return setOpen(null)
      }
      setOpen(index)
   }

   return (
      <div className="h-full">
         <h1 className="py-6 bg-[#6abce2] text-white">Tomas</h1>
         <div className="pb-5 flex justify-center items-center gap-4 bg-[#6abce2] text-white">
            <div className="p-1 rounded-full border-2 border-white">
               <HiOutlineHeart className="text-4xl" />
            </div>
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
         <div className="">
            {
               accordionData.map((data, index) => (
                  <AccordionData key={index} open={index === open} toggle={() => toggle(index)} title={data.title} desc={data.description} />
               ))
            }
         </div>
         <Footer />
      </div>
   )
}

export default Tomas