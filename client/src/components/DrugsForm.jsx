import React from 'react'
import { Footer } from './footer.jsx'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'
import { CgPill } from 'react-icons/cg'
import { BiPlusMedical } from 'react-icons/bi'
import { BsCircle } from 'react-icons/bs'
import { checkSwitch } from './switch.js'
import axios from 'axios'

import { FaPlus } from 'react-icons/fa'

const DrugsForm = () => {

  const navigate = useNavigate()

  const PostInfo = async (values) => {
    try {
      values.doseAmount.toString()
      console.log(values)
      const response = await axios.post(
        'https://apisanva.onrender.com/user',
        values
      )
    } catch (error) {
      console.log(error)
    }
  }

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    // PostInfo(values)
    //setea el estado drugs con la info del formulario
    clearDrug()
    setDrug(...drug, values)

    navigate('/user')
  }

  const validateFields = (values) => {
    const errors = {}

    // validate name
    if (!values.name) {
      errors.name = 'El nombre del medicamento es obligatorio'
    }
    // verify type
    if (!values.type) {
      errors.type = 'El tipo de medicamento es obligatorio'
    }
    // verify doseAmount
    if (!values.doseAmount) {
      errors.doseAmount = 'La cantidad por dosis es obligatoria'
    }
    // verify doseFrequency
    if (!values.doseFrequency) {
      errors.doseFrequency = 'La frecuencia de la dosis es obligatoria'
    }
    // verify firstDoseHour
    if (!values.firstDoseHour) {
      errors.firstDoseHour = 'La hora de la primer dosis es obligatoria'
    }
    // verify dosingDays
    if (!values.dosingDays) {
      errors.dosingDays = 'Los días de la dosis son obligatorios'
    }
    // verify inventory
    if (!values.inventory) {
      errors.inventory = 'El inventario es obligatorio'
    }

    return errors
  }

  return (
    <div className='h-screen flex flex-col text-white bg-[#6abce2]'>
      <h1 className='py-6 text-[40px]'>Medicamentos</h1>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/medicineslist">
          <div className="p-2 rounded-full border-2 border-white">
            <CgPill className="text-3xl" />
          </div>
        </Link>
        {/* <Link to="/DrugsForm"> */}
          <div className="relative p-2 rounded-full border-2 border-white">
            <CgPill className="text-3xl" />
            <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
          </div>
        {/* </Link> */}
      </div>
      <Formik
      initialValues={{
        name: '',
        type: '',
        doseAmount: 0,
        doseFrequency: '8 horas',
        firstDoseHour: '12 hs',
        dosingDays: 0,
        inventory: 0,
        reminder: false,
        lackOfInventoryAlert: false
      }}
      onSubmit={HandleSubmit}
      validate={validateFields}
      >
        {({ isSubmitting }) => (
          <Form className="flex-1 text-slate-500 bg-white">
            <button className="py-2 w-full rounded-none text-white bg-[#3982b8]"
              type="submit">
                Agregar Medicamento
            </button>
            <Field name='name'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Nombre </label>
                    <input type="text" className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="Nombre" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='type'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                  <label className="font-medium">Tipo </label>
                  <select name="type" className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}>
                    <option value="" disabled>Select. tipo</option>
                    <option value="píldora">Píldora</option>
                    <option value="polvo">Polvo</option>
                    <option value="líquido">Líquido</option>
                    <option value="inyectable">Inyectable</option>
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
            <Field name='doseAmount'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Cantidad por dosis </label>
                    <input type="number" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="1" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='doseFrequency'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                  <label className="font-medium">Frecuencia de dosis </label>
                  <select name="doseFrequency" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}>
                    <option value="4 hs">4 hs</option>
                    <option value="8 hs">8 hs</option>
                    <option value="12 hs">12 hs</option>
                    <option value="24 hs">24 hs</option>
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
            <Field name='firstDoseHour'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Hora de primera dosis </label>
                    <select name="firstDoseHour" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}>
                      <option value="7 AM">7 AM</option>
                      <option value="8 AM">8 AM</option>
                      <option value="9 AM">9 AM</option>
                      <option value="10 AM">10 AM</option>
                      <option value="11 AM">11 AM</option>
                      <option value="12 AM">12 AM</option>
                      <option value="1 PM">1 PM</option>
                      <option value="2 PM">2 PM</option>
                      <option value="3 PM">3 PM</option>
                    </select>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pt-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name='dosingDays'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Días de dosis </label>
                    <input type="number" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}></input>
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
                  <input type="number" className="text-black h-9 w-[9rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200" {...field}></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className='pb-2 text-red-600 font-semibold'>
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="reminder">
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="h-[56px] py-3 flex justify-between pl-[30px] pr-[60px] items-center">
                    <label className="font-medium">Recordatorio</label>
                        <input
                          className={checkSwitch}
                          type='checkbox'
                          role="switch"
                          // placeholder='Recordatorio'
                          {...field}
                          style={{ scale: '1.3' }}
                          />
                    {meta.touched && meta.error && (
                        <div className='pb-2 text-red-600 font-semibold'>
                          {meta.error}
                          </div>
                    )}
                    </div>
                    </div>
              )}
            </Field>
            <Field name='lackOfInventoryAlert'>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="h-[56px] py-3 flex justify-between pl-[30px] pr-[60px] items-center">
                    <label className="font-medium">Alerta por falta de inventario</label>
                    <input
                      className={checkSwitch}
                      type='checkbox'
                      role="switch"
                      // placeholder='Alerta por falta de inventario'
                      {...field}
                      style={{ scale: '1.3' }}
                      />
                  </div>
                  {meta.touched && meta.error && (
                  <div className='pt-2 text-red-600 font-semibold'>
                    {meta.error}
                  </div>
                  )}
                </div>
              )}
            </Field>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  )
}

export default DrugsForm
