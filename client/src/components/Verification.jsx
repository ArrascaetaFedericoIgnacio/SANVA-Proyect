import React from 'react'
import { useNavigate } from 'react-router'
import Logo from '../../public/logosanva.png'

export const Verification = () => {
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  const code = localStorage.getItem('codigo')
  const navigate = useNavigate()
  const handleCode = (e) => {
    e.preventDefault()
    const codeInput = document.getElementById('code').value
    if (codeInput === code) {
      console.log('Código correcto')
      navigate('/PersonalData')
    } else {
      console.log('Código incorrecto')
    }
  }

  return (
  <div className="h-screen w-screen flex flex-col justify-center items-center">
    <div className="relative w-screen h-screen flex justify-center items-center">
    <div className="absolute w-screen h-screen -translate-y-40 skew-y-[40deg] bg-[#6abce2]"></div>
    <div className="absolute w-screen h-screen translate-y-20 skew-y-[40deg] bg-[#58afdd]"></div>
    <div className="absolute w-screen h-screen translate-y-[28rem] bg-[#3982b8]"></div>
    <div className="absolute h-screen w-full flex flex-col justify-center items-center xl:pt-8 pt-20">
      <img className="fixed top-3 right-3 w-32" src={Logo} />
      <div className="mb-[120px]">
        <img className='mb-10 rounded-full w-32' src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg" alt="user" />
        {/* <h1 className="text-2xl font-bold mb-4">Verificación</h1> */}
        <p>{username}</p>
        {/* <p>{email}</p> */}
        </div>
      <p className="text-center mb-4">Se ha enviado un código de verificación a {email}</p>
  <form className="flex flex-col items-center" onSubmit={handleCode}>
    <input className="w-64 p-2 mb-4 border border-gray-300 rounded-md bg-white text-black" type="text" id="code" placeholder="Introduce el código aquí" />
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Verificar</button>
  </form>
  </div>
  </div>
</div>

  )
}

export default Verification
