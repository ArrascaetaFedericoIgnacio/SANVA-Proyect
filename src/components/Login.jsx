import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

export const Login = () => {
const HandleIngreso = (values,{setSubmitting}) => {

    setSubmitting(false)
    console.log(values)

}

const validarCampos = (values) => {
    let errores = {}

// valida el usuario
    if(!values.usuario){
        errores.usuario = 'El usuario es obligatorio'
    } else if (values.usuario.length < 6) {
        errores.usuario = 'El usuario debe tener al menos 6 caracteres'
    }
  
    if(!values.password){
        errores.password = 'El password es obligatorio'
    } else if (values.password.length < 6) {
        errores.password = 'El password debe tener al menos 6 caracteres'
    }

    return errores
}
 
 
 
 
      return (
    <div>
        <Formik initialValues={{usuario: '', password: ''}} onSubmit={HandleIngreso
        } validate={validarCampos}>                        
         {({isSubmitting})=>
            <Form>
            <Field name="usuario" type="usuario" placeholder="Ingresa tu usuario" />
            <ErrorMessage name="usuario" />
            <Field name="password" />
            <ErrorMessage name="password" type="password" />
            <button disabled={isSubmitting} type="submit">Ingresar</button>
            </Form>
         }   
       </Formik>
    </div>
    )
}


