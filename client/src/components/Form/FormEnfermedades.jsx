import { Field, Form, Formik } from "formik";
import { FaBacterium, FaPlus } from "react-icons/fa"
import { Footer } from "../footer";
import DatePikerField from "../DatePicker";
import { Link } from "react-router-dom";
import { checkSwitch } from "../switch";

const FormEnfermedades = () => {

   const HandleSubmit = (values) => {
      console.log("enfermedades ->", values);
   }

   const validateCamps = (values) => {
      const errors = {}
      if (!values.name) {
         errors.name = "El nombre es obligatorio"
      }
      if (!values.medico) {
         errors.medico = "El medico es obligatorio"
      }
      if (!values.medicamento) {
         errors.medicamento = "El medicamento es obligatorio"
      }
      if (!values.tratamiento) {
         errors.tratamiento = "El tratamiento es obligatorio"
      }
      if (!values.proxima) {
         errors.proxima = "La cita medica es obligatorio"
      }
      return errors;
   }

   return (
      <div className="h-screen flex flex-col text-white bg-[#6abce2]">
         <h2 className="py-6 text-[40px]">Enfermedades</h2>
         <div className="pb-3 flex justify-center items-center gap-5">
            <Link to="/DiseasesList">
               <div className="p-2 rounded-full border-2 border-white">
                  <FaBacterium className="text-3xl" />
               </div>
            </Link>
            <Link to="/enfermedades">
               <div className="relative p-2 rounded-full border-2 border-white">
                  <FaBacterium className="text-3xl" />
                  <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
               </div>
            </Link>
         </div>
         <Formik
            initialValues={{
               name: "",
               medico: "",
               medicamento: "",
               tratamiento: "",
               proxima: "",
               alert: false,
               comentario: ""
            }}
            onSubmit={HandleSubmit}
            validate={validateCamps}
         >
            {({ isSubmitting }) => (
               <Form className="flex-1 text-slate-500 bg-white">
                  <button className="py-2 w-full rounded-none text-white bg-[#3982b8]" 
                     type="submit">
                        Agregar Enfermedad
                  </button>
                  <Field name="name">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                              <label className="font-medium">Nombre</label>
                              <input
                                 className='text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='text'
                                 placeholder='Nombre del paciente'
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
                  <Field name="medico">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="py-3 flex justify-between px-[30px] items-center">
                              <label className="font-medium">Medico</label>
                              <input
                                 className='text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='text'
                                 placeholder='Nombre del Medico'
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
                  <Field name="medicamento">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="py-3 flex justify-between px-[30px] items-center">
                              <label className="font-medium">Medicamento</label>
                              <input
                                 className='text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='text'
                                 placeholder='Nombre de medicamento'
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
                  <Field name="tratamiento">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="py-3 flex justify-between px-[30px] items-center">
                              <label className="font-medium">Tratamiento</label>
                              <input
                                 className='text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='text'
                                 placeholder='Nombre'
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
                  <Field name="proxima">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="py-3 flex justify-between px-[30px] items-center">
                              <label className="font-medium">Proxima cita medica</label>
                              <DatePikerField name="proxima"/>
                           </div>
                           {meta.touched && meta.error && (
                              <div className='pb-2 text-red-600 font-semibold'>
                                 {meta.error}
                              </div>
									)}
                        </div>
                     )}
                  </Field>
                  <Field name="alert">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div className="border-b-[1.8px] border-[#3982b8]">
                           <div className="h-[56px] py-3 flex justify-between pl-[30px] pr-[60px] items-center">
                              <label className="font-medium">Alerta para cita medica</label>
                              <input
                                 className={checkSwitch}
                                 type='checkbox'
                                 role="switch"
                                 placeholder='Nombre'
                                 {...field}
                                 style={{scale: "1.3"}}
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
                  <Field name="comentario">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-4 flex justify-between px-[30px] items-center">
                              {/* <p>Comentarios</p> */}
                              <textarea
                                 className='text-black h-20 w-full rounded-lg bg-white px-4 py-3 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='textarea'
                                 placeholder='Comentarios'
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
               </Form>
            )}
         </Formik>
         <Footer />
      </div>
   )
}

export default FormEnfermedades;