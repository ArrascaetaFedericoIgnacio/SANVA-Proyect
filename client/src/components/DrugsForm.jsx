import React from 'react'
import { Footer } from './footer.jsx'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'

const DrugsForm = () => {
  const navigate = useNavigate()

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
          reminder: true,
          lackOfInventoryAlert: true
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}>
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col py-9 gap-3 px-14 bg-[#58afdd] text-white'>
              <div className='flex justify-center items-center gap-2'>
                <p>Agregar Medicamento</p>
              </div>
                    <Field
                      name='name'
                    >
                      {({ field, form: { touched, errors }, meta }) => (
                        <div>
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
