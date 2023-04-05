import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { Footer } from './footer'

export const User = () => {
  const [user, setUser] = useState(null)
  console.log('user', user)

  useEffect(() => {
    const userlocal = localStorage.getItem('user')
    const userparseado = JSON.parse(userlocal)
    setUser(userparseado)
    console.log('userparseado', userparseado)
  }, [])

  const { username, email, birthdate, gender, height, weight } = user || {}

  return (
    <div className="h-full w-full text-lg font-semibold">
      <div className="py-8 flex flex-col justify-between items-center bg-[#6abce2] text-white">
        <img
          className="mt-3 rounded-full w-28"
          src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg"
          alt="user"
        />
        <div className="flex items-center gap-2">
          {username
            ? (
            <h3 className="py-3">{username}</h3>
              )
            : (
            <h3 className="py-3">Nombre</h3>
              )}
          <FaPencilAlt />
        </div>
        <p>{email}</p>
      </div>
      <div className="flex flex-col py-8 gap-3 px-14 bg-[#58afdd] text-white">
        <div className="flex justify-center items-center gap-2">
          <p>Informacion general</p>
          <FaPencilAlt />
        </div>
        <div className="flex justify-between">
          <p>Fecha</p>
          <p>{birthdate}</p>
        </div>
        <div className="flex justify-between">
          <p>Sexo</p>
          <p>{gender === 'm' ? 'Masculino' : 'Femenino'}.</p>
        </div>
        <div className="flex justify-between">
          <p>Talla</p>
          <p>{height} Mts.</p>
        </div>
        <div className="flex justify-between">
          <p>Peso</p>
          <p>{weight} Kg.</p>
        </div>
      </div>
      <div className="px-4 pt-8 pb-24 bg-[#3982b8] text-white">
        <p className="mb-3">Informacion Medica</p>
        <div className="flex flex-col items-start px-10 gap-3">
          <p>Enfermedades</p>
          <p>Medicamento</p>
          <p>Alergias</p>
          <p>Insumos o Servicios</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
