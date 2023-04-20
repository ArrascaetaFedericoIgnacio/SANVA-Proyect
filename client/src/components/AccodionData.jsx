import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { Collapse } from "react-collapse"
import { TbHeart, TbDroplet, TbCandy } from "react-icons/tb"

const AccordionData = ({open, toggle, date, heartRate, tas, glucose}) => {
   // const dateStr = JSON.parse(date)
   console.log(date);
   console.log(typeof(date));
   return (
      <div className="">
         <div className="py-[15px] px-[40px] flex justify-between items-center cursor-pointer border-t-2 border-[#58afdd] text-[#58afdd]"
            onClick={toggle}
         >
            <p className="text-[22px] font-semibold">{date}</p>
            <div className="text-[30px]">
               { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
            </div>
            
         </div>
         <Collapse isOpened={open}>
            <div className="flex flex-col items-start px-[55px] text-[#58afdd]">
               <div className="flex items-center gap-4 text-[20px]">
                  <TbHeart className="text-2xl"/>
                  {heartRate}
               </div>
               <div className="flex items-center gap-4 text-[20px]">
                  <TbDroplet className="text-2xl"/>
                  {tas}
               </div>
               <div className="flex items-center gap-4 text-[20px] pb-[20px]">
                  <TbCandy className="text-2xl"/>
                  {glucose}
               </div>
            </div>
         </Collapse>
      </div>
   )
}

export default AccordionData;