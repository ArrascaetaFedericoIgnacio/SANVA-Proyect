import React from 'react'
import { Footer } from './footer.jsx'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'
import { BiPlusMedical } from 'react-icons/bi'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { checkSwitch } from './switch.js'
import axios from 'axios'

const DrugsForm = () => {
  const navigate = useNavigate()

  //   const PostInfo = async (values) => {
  //     try {
  //       console.log(values)
  //       const response = await axios.post(
  //         'https://apisanva.onrender.com/user',
  //         values
  //       )
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  const HandleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    PostInfo(values)
    navigate('/user')
  }

  //   const validateFields = (values) => {
  //     const errors = {}

  //     // validate allergieNname
  //     if (!values.allergieName) {
  //       errors.allergieNname = 'El nombre de la alergia es obligatorio'
  //     }
  //     // verify vaccine
  //     if (!values.vaccine) {
  //       errors.vaccine = 'El nombre de la vacuna es obligatorio'
  //     }
  //     // verify inventory
  //     if (!values.inventory) {
  //       errors.inventory = 'El inventario es obligatorio'
  //     }
  //     // verify vaccineFrequency
  //     if (!values.vaccineFrequency) {
  //       errors.vaccineFrequency = 'La frecuencia de la vacuna es obligatoria'
  //     }

  //     return errors
  //   }

  return (
    <div>
        <header className="w-screen h-52 bg-[#4194cb] text-white flex justify-center items-center flex-col">
            <h1>Insumos</h1>
            <div className="flex flex-row space-x-7 mt-12">
            <Link to="/serviceslist">
                <div>
                <BsCircle className="w-11 h-11"/>
                <BsBriefcaseFill className="w-8 h-8 absolute -translate-y-[38px] translate-x-[6px]"/>
                </div>
            </Link>
            {/* <Link to="/AllergiesForm"> */}
                <div>
                <BsCircle className="w-11 h-11"/>
                <FaBriefcaseMedical className="w-8 h-8 absolute -translate-y-[38px] translate-x-[6px]"/>
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
          inventory: 0,
          dailySupply: 0,
          consumptionDays: 'false',
          supplier: '',
          comments: '',
          lackfOfInventoryAlert: false
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}>
        {({ isSubmitting }) => (
        <Form className="text-black bg-white">
            <div className='flex flex-col bg-[#58afdd] text-white bg-white'>
            <button className="py-2 w-full rounded-none text-white bg-[#3982b8]"
                    type="submit">
                        Agregar
                </button>
                    <Field
                    name='name'
                    >
                    {({ field, form: { touched, errors }, meta }) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                        <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between px-[30px] items-center">
                        <label className="w-[50%]">Nombre </label>
                        <input type="text" className="bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="Nombre de alergia" {...field}></input>
                        {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                            {meta.error}
                            </div>
                        )}
                        </div>
                        </div>
                    )}
                    </Field>

                    <Field
                    name='type'
                    >
                    {({ field, form: { touched, errors }, meta }) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                        <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between px-[30px] items-center">
                        <label className="w-[50%]">Tipo </label>
                        <input type="text" className="bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="Nombre de vacuna" {...field}></input>
                        {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                            {meta.error}
                            </div>
                        )}
                        </div>
                        </div>
                    )}
                    </Field>

                    <Field
                    name='inventory'
                    >
                    {({ field, form: { touched, errors }, meta }) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                        <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between px-[30px] items-center">
                        <label className="w-[50%]">Inventario </label>
                        <input type="number" className="bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200" placeholder="1" {...field}></input>
                        {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                            {meta.error}
                            </div>
                        )}
                        </div>
                        </div>
                    )}
                    </Field>

                    <Field
                    name='consumptionDays'
                    >
                    {({ field, form: { touched, errors }, meta }) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                        <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between items-center">
                        <label className="w-[60%]">Días de consumo </label>
                        <select name="vaccineFrequency" className="w-[40%] mr-10 bg-white text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200" {...field}>
                            <option value="oncePerWeek">Semanal</option>
                            <option value="oncePerThreeWeeks">Cada tres semanas</option>
                            <option value="oncePerFourWeeks">Cada cuatro semanas</option>
                            <option value="oncePerMonth">Mensual</option>
                        </select>
                        {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                            {meta.error}
                            </div>
                        )}
                        </div>
                        </div>
                    )}
                    </Field>

                    <Field
                    name='supplier'
                    >
                    {({ field, form: { touched, errors }, meta }) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                        <div className="w-screen bg-white text-slate-400 py-[16px] flex justify-between px-[30px] items-center">
                        <label className="w-[70%]">Proveedor </label>
                                <input
                                className={checkSwitch}
                                type='checkbox'
                                role="switch"
                                // placeholder='Recordatorio de vacuna:'
                                {...field}
                                style={{ scale: '1.3' }}
                                />
                            {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                            {meta.error}
                            </div>
                            )}
                        </div>
                    </div>
                    )}
                    </Field>

                    <Field
                    name='comments'
                    >
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
                    <Field
                    name='lackOfInventoryAlert'
                    >
                        {({ field, form: { touched, errors }, meta }) => (
                        <div>
                            <div className="py-4 flex justify-between px-[30px] items-center">
                                <p>Alerta por falta de inventario </p>
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
