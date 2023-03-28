import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Register = () => {
	const HandleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
	};

	const validateCamps = (values) => {
		let errors = {};

		// validate name
		if (!values.name) {
			errors.name = "El nombre es obligatorio";
		}
		// verify password
		if (!values.password) {
			errors.password = "El password es obligatorio";
		} else if (values.password.length < 6) {
			errors.password = "El password debe tener al menos 6 caracteres";
		}
		// check if passwords are the same
		if (values.verifyPassword !== values.password) {
			errors.verifyPassword = "Las contraseñas no coinciden";
		}
		//check email
		if (!values.email) {
			errors.email = "El correo es requerido";
		} else if (
			!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
		) {
			errors.email = "Email invalido";
		}
		return errors;
	};

	return (
		<div>
			<Formik
				initialValues={{
					name: "",
					password: "",
					email: "",
					verifyPassword: "",
				}}
				onSubmit={HandleSubmit}
				validate={validateCamps}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="my-1">
							<Field name="name" type="text" placeholder="Nombre" />
							<ErrorMessage name="name" />
						</div>
						<div className="my-1">
							<Field name="password" placeholder="Contraseña" type="password" />
							<ErrorMessage name="password" />
						</div>
						<div className="my-1">
							<Field
								name="verifyPassword"
								type="password"
								placeholder="Verificar Contraseña"
							/>
							<ErrorMessage name="verifyPassword" />
						</div>
						<div className="my-1">
							<Field
								name="email"
								type="email"
								placeholder="Correo Electronico"
							/>
							<ErrorMessage name="email" />
						</div>
						<div className="my-1">
							<button disabled={isSubmitting} type="submit">
								Registrar
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
