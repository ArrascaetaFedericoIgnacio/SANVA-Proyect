import { Footer } from "./footer"
import { HiOutlineHeart, HiCalendar } from "react-icons/hi"
import { FaPlus } from "react-icons/fa"
import { TbDroplet, TbCandy } from "react-icons/tb"
import { BsBuildings } from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"
import {Field, Form, Formik} from "formik"
import DatePikerField from "./DatePicker"

const NuevaToma = () => {

   const HandleSubmit = (values) => {
      console.log("tomas", values);
      console.log("type", JSON.parse(JSON.stringify(values)));
   }

   const validateCamps = (values) => {
      const errors = {}
      if (!values.date) {
         errors.date = "El campo es obligatorio"
      }
      if (!values.heartRate) {
         errors.heartRate = "El campo es obligatorio"
      }
      if (!values.tas) {
         errors.tas = "El campo es obligatorio"
      }
      if (!values.tad) {
         errors.tad = "El campo es obligatorio"
      }
      if (!values.glucoseLevel) {
         errors.glucoseLevel = "El campo es obligatorio"
      }

      return errors
   }

   return (
      <div className="h-full mb-[54px]">
         <h1 className="py-6 bg-[#6abce2] text-white">Tomas</h1>
         <div className="pb-3 flex justify-center items-center gap-4 bg-[#6abce2] text-white">
            <div className="relative p-1 rounded-full border-2 border-white">
               <HiOutlineHeart className="text-4xl" />
               <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.2rem] right-2" />
            </div>
            <div className="p-2 rounded-full border-2 border-white">
               <BsBuildings className="text-3xl" />
            </div>
            <div className="p-2 rounded-full border-2 border-white">
               <HiCalendar className="text-3xl" />
            </div>
         </div>
         <Formik
            initialValues={{
               date: "",
               heartRate: "",
               tas: "",
               tad: "",
               glucoseLevel: "",
               comments: ""
            }}
            onSubmit={HandleSubmit}
            validate={validateCamps}
         >
            {({ isSubmitting }) => (
               <Form className="text-[#58afdd]">
                  <button className="py-2 w-full text-xl rounded-none text-white bg-[#3982b8]" 
                     type="submit">
                        Nueva Toma
                  </button>
                  <Field name="date">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              {/* <h1 className="p-2 text-[20px] text-start">02 de Junio 2020</h1> */}
                              <DatePikerField name="date" />
                           </div>
                           {meta.touched && meta.error && (
                              <div className='pb-2 text-red-600 font-semibold'>
                                 {meta.error}
                              </div>
									)}
                        </div>
                     )}
                  </Field>
                  <Field name='heartRate'>
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-t-2 border-[#3982b8]">
                           <div className="py-3 pl-8 flex justify-start items-center gap-8">
                              <HiOutlineHeart className="text-2xl" />
                              <input className="h-7 w-[50px] px-2 outline-none bg-[#f2f0f0]"
                                 type="text"
                                 placeholder="83"
                                 {...field}
                                 />
                              <p className="font-medium">Frecuencia Cardiaca</p>
                           </div>
                              {meta.touched && meta.error && (
                                 <div className='pb-2 text-red-600 font-semibold'>
                                    {meta.error}
                                 </div>
                              )}
                        </div>
                     )}
                  </Field>
                  <Field name='tas'>
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-y-2 border-[#3982b8]">
                           <div className="py-3 pl-8 flex justify-start items-center gap-8">
                              <TbDroplet className="text-2xl" />
                              <input className="h-7 w-[50px] px-2 outline-none bg-[#f2f0f0]"
                                 type="text"
                                 placeholder="13"
                                 {...field}
                                 />
                              <p className="font-medium">Tensión Arterial Sistolica</p>
                           </div>
                              {meta.touched && meta.error && (
                                 <div className='pb-2 text-red-600 font-semibold'>
                                    {meta.error}
                                 </div>
                              )}
                        </div>
                     )}
                  </Field>
                  <Field name='tad'>
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-3 pl-8 flex justify-start items-center gap-8">
                              <TbDroplet className="text-2xl" />
                              <input className="h-7 w-[50px] px-2 outline-none bg-[#f2f0f0]"
                                 type="text"
                                 placeholder="52"
                                 {...field}
                                 />
                              <p className="font-medium">Tensión Arterial Diastolica</p>
                           </div>
                              {meta.touched && meta.error && (
                                 <div className='pb-2 text-red-600 font-semibold'>
                                    {meta.error}
                                 </div>
                              )}
                        </div>
                     )}
                  </Field>
                  <Field name='glucoseLevel'>
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-y-2 border-[#3982b8]">
                           <div className="py-3 pl-8 flex justify-start items-center gap-8">
                              <TbCandy className="text-2xl" />
                              <input className="h-7 w-[50px] px-2 outline-none bg-[#f2f0f0]"
                                 type="text"
                                 placeholder="143"
                                 {...field}
                                 />
                              <p className="font-medium">Nivel de glucosa</p>
                           </div>
                              {meta.touched && meta.error && (
                                 <div className='pb-2 text-red-600 font-semibold'>
                                    {meta.error}
                                 </div>
                              )}
                        </div>
                     )}
                  </Field>
                  <Field name="comments">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-4 flex justify-between px-[30px] items-center">
                              {/* <p>Comentarios</p> */}
                              <textarea
                                 className='text-black placeholder:text-[#58afdd] placeholder:font-medium h-20 w-full rounded-lg bg-white px-4 py-3 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='textarea'
                                 placeholder='Notas'
                                 style={{resize: "none"}}
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
                  {/* <button
                     className="my-[20px] rounded-2xl border-2 border-sky-600 transition duration-200"
                     type="submit">
                     Agregar Toma
                  </button> */}
               </Form>
            )}
         </Formik>
         <Footer />
      </div>
   )
}
export default NuevaToma