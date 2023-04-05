import { Footer } from "./footer"
import alianzaIcon from "../assets/alianza.png"

const Alianza = () => {
   return (
      <div className="h-screen flex flex-col justify-center items-center text-white">
         <h1 className=" absolute top-0 w-full py-5 font-medium bg-[#58afdd] ">Aliados</h1>
         <div className="flex flex-col justify-center items-center gap-5">
            <img className="w-24 text-[#4cceac]" src={alianzaIcon} />
            <p className="text-[19px] font-semibold w-8/12 text-[#212529]">Aguegue a sus profesionales de la salud y realice un seguimiento de sus citas.</p>
            <button className="font-bold rounded-2xl text-xl bg-[#0091cb]">Añadir ahora</button>
         </div>
         <Footer />
      </div>
   )
}

export default Alianza