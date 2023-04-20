import React from 'react'
import { Footer } from './footer.jsx'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'
import { BiPlusMedical } from 'react-icons/bi'
import { BsCircle, BsVirus } from 'react-icons/bs'
import { checkSwitch } from './switch.js'
import axios from 'axios'
import { FaPlus } from 'react-icons/fa'
import  useAllergies  from '../store/useAllergies'

const DrugsForm = () => {
  
  const navigate = useNavigate()

  const PostInfo = async (values) => {
    try {
      console.log(values)
      const response = await axios.post(
        'https://apisanva.onrender.com/user',
        values
      )
    } catch (error) {
      console.log(error)
    }
  }

   const {allergies, setAllergies} = useAllergies()

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    // PostInfo(values)
    //setea allergies con el nuevo valor
    setAllergies([...allergies, values])
    //consologea el nuevo valor
    console.log(allergies)
    console.log(values);
    navigate('/user')
  }

  const validateFields = (values) => {
    const errors = {}

    // validate allergieNname
    if (!values.allergieName) {
      errors.allergieName = 'El nombre de la alergia es obligatorio'
    }
    // verify vaccine
    if (!values.vaccine) {
      errors.vaccine = 'El nombre de la vacuna es obligatorio'
    }
    // verify inventory
    if (!values.inventory) {
      errors.inventory = 'El inventario es obligatorio'
    }
    // verify vaccineFrequency
    if (!values.vaccineFrequency) {
      errors.vaccineFrequency = 'La frecuencia de la vacuna es obligatoria'
    }

    return errors
  }

  return (
    <div className='h-screen flex flex-col text-white bg-[#6abce2]'>
      <h2 className='py-6 text-[40px]'>Alergias</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/allergieslist">
          <div className='p-2 rounded-full border-2 border-white'>
            <BsVirus className="text-3xl"/>
          </div>
        </Link>
        {/* <Link to="/AllergiesForm"> */}
          <div className='relative p-2 rounded-full border-2 border-white'>
            <BsVirus className="text-3xl"/>
            <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2"/>
          </div>
        {/* </Link> */}
      </div>
      <Formik
        initialValues={{
          allergieName: '',
          vaccine: '',
          inventory: 0,
          vaccineFrequency: '',
          vaccineReminder: false,
          comments: ''
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}
      >
        {({ isSubmitting }) => (
          <Form className="flex-1 text-slate-500 bg-white">
            <button className="py-2 w-full rounded-none text-white bg-[#3982b8]"
              type="submit">
                Agregar
            </button>
            <Field name='allergieName'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Nombre</label>
                    <input type="text" className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="Nombre de alergia" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='vaccine'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Vacuna </label>
                    <input type="text" className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="Nombre de vacuna" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='inventory'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Inventario </label>
                    <input type="number" className="text-black h-9 w-[9em] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="1" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='vaccineFrequency'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Frecuencia de vacuna </label>
                    <select name="vaccineFrequency" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}>
                    <option value="oncePerWeek">Semanal</option>
                    <option value="oncePerThreeWeeks">Cada tres semanas</option>
                    <option value="oncePerFourWeeks">Cada cuatro semanas</option>
                    <option value="oncePerMonth">Mensual</option>
                    </select>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='vaccineReminder'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="h-[56px] py-3 flex justify-between pl-[30px] pr-[60px] items-center">
                    <label className="font-medium">Recordatorio de vacuna</label>
                    <input
                      className={checkSwitch}
                      type='checkbox'
                      role="switch"
                      // placeholder='Recordatorio de vacuna:'
                      {...field}
                      style={{ scale: '1.3' }}
                    />
                  </div>
                  {meta.touched && meta.error && (
                  <div className='pb-2 text-red-600 font-semibold'>
                    {meta.error}
                  </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='comments'>
                {({ field, form: { touched, errors }, meta }) => (
                  <div>
                    <div className="py-4 flex justify-between px-[30px] items-center">
                        {/* <p>Comentarios</p> */}
                        <textarea
                          className='text-black h-20 w-full rounded-lg bg-white px-4 py-3 outline-none border-2 focus:border-sky-600 transition duration-200'
                          type='textarea'
                          placeholder='Comentarios'
                          style={{ resize: 'none' }}
                          {...field}
                          />
                    </div>
                    {meta.touched && meta.error && (
                        <div className='pb-2 text-red-600 font-semibold'>
                          {meta.error}
                        </div>
                    )}
                  </div>
                )}
            </Field>
          </Form>)}
        </Formik>
      <Footer/>
    </div>
  )
}

export default DrugsForm
