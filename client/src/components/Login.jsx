import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Persona from '../assets/logo_persona_azul_2.jpg'
import Logo from '../assets/logo_sanva.jpg'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const Logearse = async (values) => {
    try {
      console.log('values', values)
      const response = await axios.post('https://apisanva.onrender.com/user/login', values)
      console.log('response.data', response.data)
      if (response.data.username === values.username && response.data.password === values.password) {
        console.log('setItem')
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log('navigate')
        navigate('/user')
      } else if (response.data === 'Wrong password') {
        alert('Wrong password')
      }
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
    } else if (values.username.length < 3) {
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
      <div className="relative overflow-hidden w-screen h-screen flex justify-center items-center">
        <div className="absolute w-screen h-screen -translate-y-10 skew-y-[40deg] bg-[#b8e2f4]"></div>
        <div className="absolute w-screen h-screen skew-y-[40deg] bg-[#8dcfec]"></div>
        <div className="absolute w-screen h-screen translate-y-10 skew-y-[40deg] bg-[#6abce2]"></div>
        <div className="absolute w-screen h-screen translate-y-20 skew-y-[40deg] bg-[#58afdd]"></div>
        <div className="absolute w-screen h-screen translate-y-[48rem] skew-y-[40deg] bg-[#3982b8]"></div>
        <div className="absolute flex flex-col justify-center items-center mt-10">
          <img src={Logo} alt="logo_sanva" className="w-[10rem] h-[10rem]"></img>

          <Formik initialValues={{ username: '', password: '' }} onSubmit={HandleSubmit
          } validate={ValidateFields}>

            {({ isSubmitting }) =>
              <Form className="flex flex-col gap-5 pt-8">
                {/* <Field name="username" type="username" placeholder="Nombre" className="w-[200px] bg-white rounded-[5px] text-black" />
                <ErrorMessage name="username" /> */}
                <Field name="username">
                  {({ field, form: { touched, errors }, meta}) => (
                    <div className="">
                      <input
                        className='text-black h-10 w-56 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
                        type='text'
                        placeholder='Nombre'
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className='pt-2 text-red-600 font-semibold'>
                          {meta.error}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
                {/* <Field name="password" type="password" placeholder="Contraseña" className="w-[200px] bg-white rounded-[5px] text-black" />
                <ErrorMessage name="password" type="password" /> */}
                <Field name="password">
                  {({ field, form: { touched, errors }, meta}) => (
                    <div className="">
                      <input
                        className='text-black h-10 w-56 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
                        type='password'
                        placeholder='password'
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className='pt-2 text-red-600 font-semibold'>
                          {meta.error}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
                <button 
                  className="py-1.5 rounded-[5px] text-white bg-[#3271a5]"
                  disabled={isSubmitting} 
                  type="submit">
                    Log In
                </button>
              </Form>
            }
          </Formik>
          {/* <div className="w-full mt-28 ml-10"> */}
            <Link to="/register" >
              <img src={Persona} alt="logo_persona_azul" className="fixed bottom-10 left-8 w-[5rem] h-[5rem] rounded-full">
              </img>
            </Link>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
