import React from 'react'
import { useNavigate } from "react-router"

export const Verification = () => {
  const email = localStorage.getItem("email");
  const code = localStorage.getItem("codigo");
  const navigate = useNavigate()

  const handleCode = (e) => {
    e.preventDefault();
    const codeInput = document.getElementById('code').value;
    if (codeInput === code) {
      console.log('Código correcto');
      navigate('/PersonalData')
    } else {
      console.log('Código incorrecto');
    }
  }


  return (
    <div class="h-screen w-screen flex flex-col justify-center items-center">
      <h1 class="text-2xl font-bold mb-4">Verificación</h1>
      <p class="text-center mb-4">Se ha enviado un código de verificación a {email}</p>
      <form class="flex flex-col items-center" onSubmit={handleCode}>
        <input class="w-64 p-2 mb-4 border border-gray-300 rounded-md" type="text" id="code" placeholder="Introduce el código aquí" />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Verificar</button>
      </form>
    </div>

  )
}

export default Verification