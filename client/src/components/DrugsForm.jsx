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

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    PostInfo(values)
    navigate('/user')
  }

  const validateFields = (values) => {
    const errors = {}

    // // validate name
    // if (!values.birthdate) {
    //   errors.birthdate = 'La fecha de nacimiento es obligatoria'
    // }
    // // verify password
    // if (!values.gender) {
    //   errors.gender = 'El género es obligatorio'
    // }
    // // verify password
    // if (!values.height) {
    //   errors.height = 'La altura es obligatoria'
    // }
    // // verify password
    // if (!values.weight) {
    //   errors.weight = 'El peso es obligatorio'
    // }

    return errors
  }

  return (
    <div>
        <header className="w-screen h-52 bg-[#4194cb] text-white flex justify-center items-center flex-col">
            <h1>Medicamentos</h1>
            <div className="flex flex-row space-x-7 mt-12">
              <Link to="/DrugsList">
                <div>
                  <BsCircle className="w-11 h-11"/>
                  <CgPill className="w-8 h-8 absolute -translate-y-[38px] translate-x-[6px]"/>
                </div>
              </Link>
              {/* <Link to="/DrugsForm"> */}
                <div>
                  <BsCircle className="w-11 h-11"/>
                  <CgPill className="w-8 h-8 absolute -translate-y-[38px] translate-x-[6px]"/>
                  <BiPlusMedical className="w-3 h-3 absolute text-black -translate-y-6 translate-x-5"/>
                </div>
              {/* </Link> */}
            </div>
        </header>
        <main>
        <Formik
        initialValues={{
          name: '',
          type: '',
          doseAmount: 0,
          doseFrequency: '8 horas',
          firstDoseHour: '12 hs',
          dosesDays: 0,
          inventory: 0,
          reminder: false,
          lackOfInventoryAlert: false
        }}
        // onSubmit={HandleSubmit}
        validate={validateFields}>
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col bg-[#58afdd] text-white'>
              {/* <div className='flex justify-center items-center gap-2 py-2'>
                <p>Agregar Medicamento</p>
              </div> */}
              <button className="py-2 w-full rounded-none text-white bg-[#3982b8]"
                     type="submit">
                        Agregar Medicamento
                  </button>
                    <Field
                      name='name'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Nombre </label>
                          <input type="text" className="bg-white" placeholder="Nombre" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='type'
                      as="select"
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Tipo </label>
                          <select name="type" className="bg-white" {...field}>
                            <option value="píldora">Píldora</option>
                            <option value="polvo">Polvo</option>
                            <option value="líquido">Líquido</option>
                            <option value="inyectable">Inyectable</option>
                          </select>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='doseAmount'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Cantidad por dosis </label>
                          <input type="number" className="bg-white" placeholder="1" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='doseFrequency'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Frecuencia de dosis </label>
                          <select name="doseFrequency" className="bg-white" {...field}>
                            <option value="4 hs">4 hs</option>
                            <option value="8 hs">8 hs</option>
                            <option value="12 hs">12 hs</option>
                            <option value="24 hs">24 hs</option>
                          </select>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='firstDoseHour'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Hora de primera dosis </label>
                          <select name="firstDoseHour" className="bg-white" {...field}>
                            <option value="7 AM">7 AM</option>
                            <option value="8 AM">8 AM</option>
                            <option value="9 AM">9 AM</option>
                            <option value="10 AM">10 AM</option>
                            <option value="11 AM">11 AM</option>
                            <option value="12 AM">12 AM</option>
                            <option value="1 PM">1 PM</option>
                            <option value="2 PM">2 PM</option>
                            <option value="3 PM">3 PM</option>
                          </select>                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='dosesDays'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Días de dosis </label>
                          <input type="number" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field
                      name='inventory'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 p-3">
                          <label className="w-[50%]">Inventario </label>
                          <input type="number" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                    <Field name="reminder">
                      {({ field, form: { touched, errors }, meta }) => (
                          <div className="w-screen flex bg-white text-slate-400 space-x-16 p-3">
                            <label className="w-[50%]">Recordatorio: </label>
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
                      )}
                  </Field>
                    <hr></hr>
                    <Field
                      name='lackOfInventoryAlert'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400 space-x-16 p-3">
                          <label className="w-[50%]">Alerta por falta de inventario: </label>
                                <input
                                  className={checkSwitch}
                                  type='checkbox'
                                  role="switch"
                                  // placeholder='Alerta por falta de inventario'
                                  {...field}
                                  style={{ scale: '1.3' }}
                                  />
                            {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                            )}
                          </div>
                      )}
                    </Field>
                    <hr></hr>
                  </div>
                  </Form>)}
                </Formik>
        </main>
        <footer>

            <Footer/>
        </footer>
    </div>
  )
}

export default DrugsForm
