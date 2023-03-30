import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Persona from '../assets/logo_persona_azul_2.jpg'

export const Login = () => {
  const Logearse = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/login', values)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    Logearse(values)
    console.log(values)
  }

  const ValidateFields = (values) => {
    const errores = {}

    // valida el usuario
    if (!values.username) {
      errores.username = 'El usuario es obligatorio'
    } else if (values.username.length < 6) {
      errores.username = 'El usuario debe tener al menos 6 caracteres'
    }

    if (!values.password) {
      errores.password = 'El password es obligatorio'
    } else if (values.password.length < 6) {
      errores.password = 'El password debe tener al menos 6 caracteres'
    }

    return errores
  }

  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="absolute w-screen h-screen -translate-y-10 skew-y-[40deg] bg-[#b8e2f4]"></div>
        <div className="absolute w-screen h-screen skew-y-[40deg] bg-[#8dcfec]"></div>
        <div className="absolute w-screen h-screen translate-y-10 skew-y-[40deg] bg-[#6abce2]"></div>
        <div className="absolute w-screen h-screen translate-y-20 skew-y-[40deg] bg-[#58afdd]"></div>
        <div className="absolute w-screen h-screen translate-y-[35rem] skew-y-[40deg] bg-[#3982b8]"></div>
        <div className="absolute flex flex-wrap justify-center translate-y-[50px]">

          <Formik initialValues={{ username: '', password: '' }} onSubmit={HandleSubmit
          } validate={ValidateFields}>

          {({ isSubmitting }) =>
              <Form className="w-3/5 flex flex-wrap space-y-4">
                <Field name="username" type="username" placeholder="Nombre" className="w-[200px] bg-white rounded-[5px] text-black"/>
              <ErrorMessage name="username" />
                <Field name="password" type="password" placeholder="ContraseÃ±a" className="w-[200px] bg-white rounded-[5px] text-black"/>
              <ErrorMessage name="password" type="password" />
              <button disabled={isSubmitting} type="submit" className="w-[200px] h-[1.5rem] leading-[0.1rem] rounded-[5px] bg-[#3271a5]">Log In</button>
              </Form>
          }
        </Formik>
        <div className="w-full mt-28 ml-10">

        <img src={Persona} alt="logo_persona_azul" className="w-[5rem] h-[5rem] rounded-[500px]"></img>
        </div>
        </div>
      </div>
    </>
  )
}
