import { Collapse } from "react-collapse"

const AccordionList = ({open, toggle, title, medico, medicamento, tratamiento}) => {
   return (
      <div className="bg-white border-b-2 border-[#58afdd]">
         <div className="pt-[15px] pb-[3px] flex justify-between pl-[40px] pr-[50px] items-center cursor-pointer text-slate-600"
            onClick={toggle}
         >
            <p className="text-[20px] font-medium">{title}</p>
            <p className="text-[20px]">{medico}</p>
         </div>
         <Collapse isOpened={open}>
            <div className="text-slate-600">
               <div className="flex justify-center text-[18px] gap-3">
                  <p>Medicamento:</p>
                  <p>{medicamento}</p>
               </div>
               <div className="pb-2 flex justify-center text-[18px] gap-3">
                  <p>Tratamiento:</p>
                  <p>{tratamiento}</p>
               </div>
            </div>
         </Collapse>
      </div>
   )
}

export default AccordionList