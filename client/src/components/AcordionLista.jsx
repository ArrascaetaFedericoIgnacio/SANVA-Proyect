import { Collapse } from "react-collapse"

const AccordionList = ({open, toggle, title, medico, medicamento, tratamiento}) => {
   return (
      <div className="bg-white border-b-2 border-[#58afdd]">
         <div className="pt-[10px] flex justify-between pl-[35px] pr-[30px] items-center cursor-pointer text-slate-500"
            onClick={toggle}
         >
            <p className="text-[18px] font-medium">{title}</p>
            <p className={`text-[18px] w-[12rem] pl-3 pb-[10px] ${open ? 'border-l-2 border-[#58afdd] text-start' : ''}`}>{medico}</p>
         </div>
         <Collapse isOpened={open}>
            <div className="px-[30px] flex justify-between text-slate-500 text-[17px]">
               <div className=""></div>
               <div>
                  <p className={`mr-[32px] pl-[11px] text-start w-[10rem] ${open ? 'border-l-2 border-[#58afdd]' : ''}`}>{medicamento}</p>
                  <p className={`mr-[32px] pl-[11px] text-start w-[10rem] mb-2 ${open ? 'border-l-2 border-[#58afdd]' : ''}`}>{tratamiento}</p>
               </div>
            </div>
         </Collapse>
      </div>
   )
}

export default AccordionList