import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

export const User = () => {
  return (
    <div className='h-screen w-full xl:w-7/12 xl:mx-auto'>
      <div className='p-5 flex flex-col justify-between items-center bg-[#6abce2] text-white'>
        <img className='mt-3 rounded-full w-28' src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg" alt="user" />
        <div className='flex items-center gap-2'>
          <h3 className='py-3'>Nombre Apellido</h3>
          <FaPencilAlt/>
        </div>
        <p>correo@dominio.com</p>
      </div>
      <div className='flex flex-col py-4 gap-3 px-14 bg-[#58afdd] text-white'>
        <div className='flex justify-center items-center gap-2'>
          <p>Informacion general</p>
          <FaPencilAlt />
        </div>
        <div className='flex justify-between'>
          <p>Fecha</p>
          <p>dd/mm/yyyy</p>
        </div>
        <div className='flex justify-between'>
          <p>Sexo</p>
          <p>Masc.</p>
        </div>
        <div className='flex justify-between'>
          <p>Talla</p>
          <p>1.8 Mts.</p>
        </div>
        <div className='flex justify-between'>
          <p>Peso</p>
          <p>76 Kg.</p>
        </div>
      </div>
      <div className='px-4 py-3 bg-[#3982b8] text-white'>
        <p className='mb-2'>Informacion Medica</p>
        <div className='flex flex-col items-start px-10 gap-3'>
          <p>Enfermedades</p>
          <p>Medicamento</p>
          <p>Alergias</p>
          <p>Insumos o Servicios</p>
        </div>
      </div>
    </div>
  )
}
