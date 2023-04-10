import React from 'react'
import { Formik, Form, Field } from 'formik'
import DatePickerField from './DatePicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import axios from 'axios'

export const PersonalData = () => {
  const navigate = useNavigate()

  const PostInfo = async (values) => {
    try {
      console.log(values)
      values.height = values.height.toString()
      values.weight = values.weight.toString()
      const response = await axios.post(
        'https://purebadeploy.onrender.com/user',
        values
      )
      console.log(response)
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(response.data))
      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    PostInfo(values)
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
    <div className='h-full flex flex-col w-full text-lg font-semibold'>
      <div className='py-8 flex flex-col justify-between items-center bg-[#6abce2] text-white'>
        <img className='mt-3 rounded-full w-28' src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg" alt="user" />
        <div className='flex items-center gap-2'>
          <h3 className='py-3'>Nombre Apellido</h3>
        </div>
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
          <Form>
            <div className='flex flex-col py-9 gap-3 px-14 bg-[#58afdd] text-white'>
              <div className='flex justify-center items-center gap-2'>
                <p>Informacion general</p>
              </div>
              <DatePickerField name="birthdate" />
              <div className='inline-block'>
                <div className="flex flex-start">
                  <p>Sexo</p>
                </div>
                <div className="flex flex-start">
                  <div className="flex row">
                    <Field
                      type="radio"
                      name='gender'
                      value='M'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div>
                          <label>M </label>
                          <input type="radio" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
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
                          <label>F </label>
                          <input type="radio" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
                <Field name='height'>
                  {({ field, form: { touched, errors }, meta }) => (
                    <div>
                      <div className='flex'>
                        <input type="number" className="bg-white text-black w-1/2 rounded-[5px] mr-2 py-2" placeholder='Talla' {...field}></input>
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
                      <div className='flex'>
                        <input type="number" className="bg-white text-black w-1/2 rounded-[5px] mr-2 py-2" placeholder='Peso' {...field}></input>
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
              <div className='px-4 py-9 bg-[#3982b8] text-white flex'>
                <div>
                  <p className='mb-3'>Información Medica</p>
                  <div className='flex flex-col items-start px-10 gap-3'>
                    <p>Enfermedades</p>
                    <p>Medicamento</p>
                    <p>Alergias</p>
                    <p>Insumos o Servicios</p>
                  </div>
                </div>
                <button className="relative outline-none rounded-full " disabled={isSubmitting} type="submit">
                  <AiFillCheckCircle style={{ width: '80px', height: '80px', position: 'absolute', top: '55%' }} />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
