import React from 'react'
import { Formik, Form, Field } from 'formik'
import DatePickerField from './DatePicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { HiCalendar } from 'react-icons/hi'

export const PersonalData = () => {
  const navigate = useNavigate()

  const PostInfo = async (values) => {
    try {
      console.log(values)
      values.height = values.height.toString()
      values.weight = values.weight.toString()
      const response = await axios.post(
        'https://apisanva.onrender.com/user',
        values
      )
      console.log(response)
      // localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(response.data))
      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    PostInfo(values)
    localStorage.setItem('birthdate', values.birthdate)
    localStorage.setItem('sexo', values.gender)
    localStorage.setItem('height', values.height)
    localStorage.setItem('weight', values.weight)
    navigate('/user')
  }

  const validateFields = (values) => {
    const errors = {}

    // validate name
    if (!values.birthdate) {
      errors.birthdate = 'La fecha de nacimiento es obligatoria'
    }
    // verify password
    if (!values.gender) {
      errors.gender = 'El género es obligatorio'
    }
    // verify password
    if (!values.height) {
      errors.height = 'La altura es obligatoria'
    }
    // verify password
    if (!values.weight) {
      errors.weight = 'El peso es obligatorio'
    }

    return errors
  }

  return (
    <div className='h-screen flex flex-col text-lg font-semibold'>
      <div className='py-8 flex flex-col justify-between items-center bg-[#6abce2] text-white'>
        <img className='mt-3 rounded-full w-28' src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg" alt="user" />
        {/* <div className='flex items-center gap-2'> */}
          <h3 className='py-3'>Nombre Apellido</h3>
        {/* </div> */}
        <p>correo@dominio.com</p>
      </div>
      <Formik
        initialValues={{
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password'),
          email: localStorage.getItem('email'),
          birthdate: '',
          gender: '',
          height: '',
          weight: ''
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}>
        {({ isSubmitting }) => (
          <Form className=''>
            <div className='flex flex-col py-9 gap-3 px-14 bg-[#58afdd] text-white'>
                <p>Informacion general</p>
              <div className='flex gap-2 items-center'>
              <DatePickerField name="birthdate" />
              <HiCalendar className='text-[2.2rem]' />
              </div>
              <div className=''>
                <h2 className='text-start text-[20px] mb-1'>Sexo</h2>
                <div className="flex flex-start gap-3 px-[15px]">
                  {/* <div className="flex"> */}
                    <Field
                      type="radio"
                      name='gender'
                      value='M'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className=''>
                          <div className='flex items-center gap-2'>
                          <label>M</label>
                          <input type="radio" className="h-[1.7rem] w-[1.7rem] focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:border-2" {...field}></input>
                          </div>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-[16px] text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field
                      type="radio"
                      name='gender'
                      value='F'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div>
                          <div className='flex items-center gap-2'>
                          <label>F</label>
                          <input type="radio" className="h-[1.7rem] w-[1.7rem] border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:border-2" {...field}></input>
                          </div>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-[16px] text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  {/* </div> */}
                </div>
              </div>
                <Field name='height'>
                  {({ field, form: { touched, errors }, meta }) => (
                    <div>
                      <div className='flex items-center gap-[1rem]'>
                        <input type="number" className="text-black h-10 w-[45%] rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder='Talla' {...field}></input>
                        <p>Mts</p>
                      </div>
                      {meta.touched && meta.error && (
                        <div className='pt-2 text-red-600 font-semibold'>
                          {meta.error}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
                <Field name='weight'>
                  {({ field, form: { touched, errors }, meta }) => (
                    <div>
                      <div className='flex items-center gap-[1rem]'>
                        <input type="number" className="text-black h-10 w-[45%] rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder='Peso' {...field}></input>
                        <p>Kg</p>
                      </div>
                      {meta.touched && meta.error && (
                        <div className='pt-2 text-red-600 font-semibold'>
                          {meta.error}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
            </div>
            <button className="fixed right-[6rem] bottom-[6rem] outline-none rounded-full " disabled={isSubmitting} type="submit">
            <AiFillCheckCircle style={{ width: '80px', height: '80px', position: 'absolute', top: '55%' }} />
            </button>
          </Form>
        )}
      </Formik>
      <div className='flex-1 px-4 py-9 bg-[#3982b8] text-white'>
        <p className='mb-3'>Información Medica</p>
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
