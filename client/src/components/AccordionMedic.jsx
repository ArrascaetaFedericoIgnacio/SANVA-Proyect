import { Collapse } from "react-collapse"

const AccordionMedic = ({open, toggle, nombre, dosis, hora, cantidad, next}) => {
   return (
      <div className="bg-white border-b-2 border-[#58afdd]">
         <div className="pt-[10px] flex justify-between pl-[30px] pr-[30px] items-center cursor-pointer text-slate-500"
            onClick={toggle}
         >
            <p className="text-[17px] pb-[9px]">{nombre}</p>
            <div className="flex gap-[25px]">
            <p className={`text-[17px] pl-2.5 pb-[10px] ${open ? 'border-l-2 border-[#58afdd]' : ''}`}>{dosis}</p>
            <p className="text-[17px] pb-[9px]">{hora}</p>
            </div>
         </div>
         <Collapse isOpened={open}>
            <div className="px-[30px] flex justify-between text-slate-500 text-[17px]">
               <div className=""></div>
               <div>
                  <p className={`mr-[52px] pl-[11px] text-start w-[10rem] ${open ? 'border-l-2 border-[#58afdd]' : ''}`}>{cantidad}</p>
                  <p className={`mr-[52px] pl-[11px] text-start w-[10rem] mb-2 ${open ? 'border-l-2 border-[#58afdd]' : ''}`}>{next}</p>
               </div>
            </div>
         </Collapse>
      </div>
   )
}

export default AccordionMedic