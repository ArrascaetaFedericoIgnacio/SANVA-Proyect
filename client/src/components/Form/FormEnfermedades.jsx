import { Field, Form, Formik } from "formik";
import { FaBacterium } from "react-icons/fa"
import { Footer } from "../footer";
import DatePikerField from "../DatePicker";

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
      <div className="h-full mb-[54px] text-white bg-[#6abce2]">
         <h2 className="py-6 text-[40px]">Enfermedades</h2>
         <div className="pb-3 flex justify-center items-center gap-5">
            <div className="p-2 rounded-full border-2 border-white">
               <FaBacterium className="text-3xl" />
            </div>
            <div className="p-2 rounded-full border-2 border-white">
               <FaBacterium className="text-3xl" />
            </div>
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
               <Form className="text-black bg-white">
                  <button className="py-2 w-full rounded-none text-white bg-[#3982b8]" 
                     type="submit">
                        Agregar Enfermedad
                  </button>
                  <Field name="name">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Nombre</p>
                              <input
                                 className='text-black h-10 w-52 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
                  <Field name="medico">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Medico</p>
                              <input
                                 className='text-black h-10 w-52 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Medicamento</p>
                              <input
                                 className='text-black h-10 w-52 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Tratamiento</p>
                              <input
                                 className='text-black h-10 w-52 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Proxima cita medica</p>
                              <DatePikerField name="proxima" />
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
                        <div>
                           <div className="py-3 flex justify-around items-center">
                              <p>Alerta para cita medica</p>
                              <input
                                 className='text-black  h-10 w-52 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
                                 type='checkbox'
                                 role="switch"
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
                  <Field name="comentario">
                     {({ field, form: { touched, errors }, meta}) => (
                        <div>
                           <div className="py-4 flex justify-around items-center">
                              {/* <p>Comentarios</p> */}
                              <textarea
                                 className='text-black h-10 w-10/12 rounded-lg bg-white px-5 py-3 outline-none border-2 focus:border-sky-600 transition duration-200'
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