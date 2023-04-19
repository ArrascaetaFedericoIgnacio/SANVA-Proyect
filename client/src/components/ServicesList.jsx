import { useState } from "react";
import { Footer } from "./footer";
import { BsBriefcaseFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import AccordionList from "./AcordionLista";

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
          <div className="p-2 rounded-full border-2 border-white">
            <BsBriefcaseFill className="text-3xl" />
          </div>
        </Link>
      </div>
      <h2 className="text-xl py-2 bg-[#3982b8] text-white">
        Lista de Insumos y Servicios
      </h2>
      <div className="flex-1 bg-white">
      {
        ListaInsumosServicios?.map((elem, i) => (
          <AccordionList key={i} open={open === i}
          toggle={() => toggle(i)}
          title={elem.nombre}
          medico={elem.tipo}
          medicamento={elem.proveedor}
          tratamiento={elem.tipo}
          />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default ServicesList;