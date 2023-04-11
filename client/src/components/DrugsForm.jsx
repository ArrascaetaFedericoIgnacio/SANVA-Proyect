import React, { useState } from 'react'
import { Footer } from './footer.jsx'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'

const DrugsForm = () => {
  const navigate = useNavigate()

  const [reminderActive, setReminderActive] = useState(false)
  const [alertActive, setAlertActive] = useState(false)

  const PostInfo = async (values) => {
    try {
      console.log(values)
      //   const response = await axios.post(
      //     'https://purebadeploy.onrender.com/user',
      //     values
      //   )
    //   navigate('/user')
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

  const handleReminderClick = () => {
    setReminderActive(prevState => !prevState)
  }
  const handleAlertClick = () => {
    setAlertActive(prevState => !prevState)
  }

  return (
    <div>
        <header className="w-screen h-52 bg-[#4194cb] text-white">
            <h1>Medicamentos</h1>
            <img></img>
            <img></img>
        </header>
        <main>
        <Formik
        initialValues={{
          name: '',
          type: '',
          doseAmount: '',
          doseFrequency: '',
          firstDoseHour: '',
          dosesDays: 0,
          inventory: 0,
          reminder: reminderActive,
          lackOfInventoryAlert: alertActive
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}>
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col py-9 gap-3 bg-[#58afdd] text-white'>
              <div className='flex justify-center items-center gap-2'>
                <p>Agregar Medicamento</p>
              </div>
                    <Field
                      name='name'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Nombre </label>
                          <input type="text" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='type'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Tipo </label>
                          <input type="text" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='doseAmount'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Cantidad por dosis </label>
                          <input type="number" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='doseFrequency'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Frecuencia de dosis </label>
                          <input type="text" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='firstDoseHour'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Hora de primera dosis </label>
                          <input type="text" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='dosesDays'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Días de dosis </label>
                          <input type="number" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='inventory'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Inventario </label>
                          <input type="number" className="bg-white" {...field}></input>
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
                              {meta.error}
                            </div>
                          )}
                          </div>
                      )}
                    </Field>
                    <Field
                      name='reminder'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Recordatorio </label>
                          {/* {reminderActive */}
                            {/* ?  */}
                            <button type="button" className={`${reminderActive ? 'bg-slate-500' : 'bg-slate-300'} border-[1px] rounded-[20%] border-black h-10 flex justify-center items-center`} onClick={handleReminderClick}{...field}>
                                <div className={`transition ease-in-out w-8 h-8 rounded-full ${reminderActive ? 'translate-x-3' : '-translate-x-3'} ${reminderActive ? 'bg-slate-300' : 'bg-slate-500'}`}></div>
                            </button>

                            {/* : <button type="button" className="bg-white" onClick={() => { setReminderActive(true) }}{...field}></button> */}
                          {/* } */}
                          {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
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
                        <div className="w-screen flex bg-white text-slate-400">
                          <label>Alerta por falta de inventario </label>
                          <button type="button" className={`${alertActive ? 'bg-slate-500' : 'bg-slate-300'} border-[1px] rounded-[20%] border-black h-10 flex justify-center items-center`} onClick={handleAlertClick}{...field}>
                                <div className={`transition ease-in-out w-8 h-8 rounded-full ${alertActive ? 'translate-x-3' : '-translate-x-3'} ${alertActive ? 'bg-slate-300' : 'bg-slate-500'}`}></div>
                            </button>
                            {meta.touched && meta.error && (
                            <div className='pt-2 text-red-600 font-semibold'>
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
