import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { Footer } from './footer'
import { Link } from 'react-router-dom'

export const User = () => {
  // const [user, setUser] = useState(null)
  // console.log('user', user)

  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  const birthdate = localStorage.getItem('birthdate')
  const gender = localStorage.getItem('sexo')
  const height = localStorage.getItem('height')
  const weight = localStorage.getItem('weight')
  // const gendervalue = btoa(gender.toString())
  // const birthdateStr = birthdate.split("").slice(4,15).join("");
  // console.log(birthdateStr);
  // useEffect(() => {
  //   console.log('useEffect')
  //   console.log('userlocal', userlocal)
  //   const userparseado = JSON.parse(userlocal)
  //   console.log('userparseado', userparseado)
  //   setUser(userparseado)
  // }, [])

  // const { username, email, birthdate, gender, height, weight } = user || {}

  return (
    <div className="h-screen xl:h-full flex flex-col text-lg font-semibold">
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
        <p>{email ? email : "correo@gmail.com"}</p>
      </div>
      <div className="flex flex-col py-8 gap-3 px-14 bg-[#58afdd] text-white">
        <div className="flex justify-center items-center gap-2">
          <p>Informacion general</p>
          <FaPencilAlt />
        </div>
        <div className="flex justify-between">
          <p>Fecha</p>
          <p>{birthdate ? birthdate.split("").slice(4,15).join("") : "dd/mm/yyyy"}</p>
        </div>
        <div className="flex justify-between">
          <p>Sexo</p>
          <p>{gender ? gender === 'M' ? 'Masculino' : 'Femenino' : "Genero"}.</p>
        </div>
        <div className="flex justify-between">
          <p>Talla</p>
          <p>{height ? height : "0"} Mts.</p>
        </div>
        <div className="flex justify-between">
          <p>Peso</p>
          <p>{weight ? weight : "0"} Kg.</p>
        </div>
      </div>
      <div className="flex-1 px-4 py-9 bg-[#3982b8] text-white">
        <p className="mb-3">Informacion Medica</p>
        <div className="flex flex-col items-start px-10 gap-4">
          <Link to="/diseaseslist">
            <p>Enfermedades</p>
          </Link>
          <Link to="/medicineslist">
            <p>Medicamento</p>
          </Link>
          <Link to="/allergieslist">
            <p>Alergias</p>
          </Link>
          <Link to="/serviceslist">
            <p>Insumos o Servicios</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
