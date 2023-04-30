import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { BsBriefcaseFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import AccordionList from "./AcordionLista";
import { FaPlus } from "react-icons/fa";
import useSupplies from "../store/useSuppliesForm";

const ServicesList = () => {
  
  const [open, setOpen] = useState(false)
    const toggle = (index) => {
      if (open === index) {
        return setOpen(null)
      }
      setOpen(index)
  }
  const ListaInsumosServicios = [
    {
      nombre: "Nombre",
      tipo: "Tipo",
      proveedor: "Proveedor",
      inventario: "Inventario",
    },
    {
      nombre: "Nombre",
      tipo: "Tipo",
      proveedor: "Proveedor",
      inventario: "Inventario",
    },
    {
      nombre: "Nombre",
      tipo: "Tipo",
      proveedor: "Proveedor",
      inventario: "Inventario",
    },
    {
      nombre: "Nombre",
      tipo: "Tipo",
      proveedor: "Proveedor",
      inventario: "Inventario",
    },
    {
      nombre: "Nombre",
      tipo: "Tipo",
      proveedor: "Proveedor",
      inventario: "Inventario",
    },
  ]
  const { supplies } = useSupplies()

  useEffect(() => {
    console.log("supplies ->", supplies);
  },[supplies])

  return (
    <div className="h-screen flex flex-col text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Insumos y Servicios</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/serviceslist">
          <div className="p-2 rounded-full border-2 border-white">
            <BsBriefcaseFill className="text-3xl" />
          </div>
        </Link>
        <Link to="/nuevoInsumo">
          <div className="relative p-2 rounded-full border-2 border-white">
            <BsBriefcaseFill className="text-3xl" />
            <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Insumos y Servicios
      </h2>
      <div className="flex-1 bg-white">
      {
        supplies.length > 0 ?
        supplies?.map((elem, i) => (
          <AccordionList key={i} open={open === i}
          toggle={() => toggle(i)}
          title={elem.name}
          medico={elem.type}
          medicamento={elem.supplier}
          tratamiento={elem.inventory}
          />
          ))
          : <div className="py-14 flex flex-col gap-6 justify-center items-center">
              <p className="font-semibold text-slate-600 text-[22px]">
                  No hay Insumos / Servicios...
              </p>
              <Link to="/nuevoInsumo">
                  <button className="font-medium rounded-2xl py-2 px-5 text-xl bg-[#0091cb]">
                    Añadir Insumos / Servicios
                  </button>
              </Link>
            </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default ServicesList;