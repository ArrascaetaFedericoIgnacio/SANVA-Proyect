import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import { CheckIcon } from "./check";
import Check from "../../public/checked.svg"
import Logo from "../../public/logosanva.png"
import axios from 'axios';

export const Register = () => {
	const CrearCuenta = async (values) => {
		try {
			console.log(values);
			const resultado = await axios.post(
				'https://purebadeploy.onrender.com/user',
				values
			);
			console.log(resultado);
		} catch (error) {
			console.log(error);
		}
	};

	const HandleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
		console.log(values);
		CrearCuenta(values);
	};

	const validateCamps = (values) => {
		let errors = {};

		// validate name
		if (!values.username) {
			errors.username = 'El nombre es obligatorio';
		}
		// verify password
		if (!values.password) {
			errors.password = 'El password es obligatorio';
		} else if (values.password.length < 6) {
			errors.password = 'El password debe tener al menos 6 caracteres';
		}
		// check if passwords are the same
		// if (values.verifyPassword !== values.password) {
		// 	errors.verifyPassword = 'Las contraseñas no coinciden';
		// }
		//check email
		if (!values.email) {
			errors.email = 'El correo es requerido';
		} else if (
			!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
				values.email
			)
		) {
			errors.email = 'Email invalido';
		}
		return errors;
	};

	return (	
		<div className="xl:h-screen flex flex-col justify-center items-center xl:pt-8 pt-20 bg-gradient-to-r from-sky-600 to-sky-300">
			<img className="fixed top-3 right-3 w-32" src={Logo} />
			<img className='mt-10 rounded-full w-32' src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600225/58872992-blanco-perfil-de-usuario-icono-en-el-bot%C3%B3n-azul-aislado-en-blanco.jpg" alt="user" />
			<Formik
				initialValues={{
					username: '',
					password: '',
					email: ''
					// verifyPassword: '',
				}}
				onSubmit={HandleSubmit}
				validate={validateCamps}>
				{({ isSubmitting }) => (
					<Form className=' flex flex-col gap-5 py-10'>
						<Field name='username'>
							{({ field, form: { touched, errors }, meta }) => (
								<div>
									<input
										className='h-10 w-64 rounded-lg px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
										type='text'
										placeholder='Nombre'
										{...field}
									/>
									{meta.touched && meta.error && (
										<div className='pt-2 text-red-600 font-semibold'>
											{meta.error}
										</div>
									)}
								</div>
							)}
						</Field>
						<Field name='password'>
							{({ field, form: { touched, errors }, meta }) => (
								<div>
									<input
										className='h-10 w-64 rounded-lg px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
										type='password'
										placeholder='Contraseña'
										{...field}
									/>
									{meta.touched && meta.error && (
										<div className='pt-2 text-red-600 font-semibold'>
											{meta.error}
										</div>
									)}
								</div>
							)}
						</Field>
						{/* <Field name='verifyPassword'>
							{({ field, form: { touched, errors }, meta }) => (
								<div>
									<input
										className='h-10 w-64 rounded-lg px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
										type='password'
										placeholder='Verificar Contraseña'
										{...field}
									/>
									{meta.touched && meta.error && (
										<div className='pt-2 text-red-600 font-semibold'>
											{meta.error}
										</div>
									)}
								</div>
							)}
						</Field> */}
						<Field name='email'>
							{({ field, form: { touched, errors }, meta }) => (
								<div>
									<input
										className='h-10 w-64 rounded-lg px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
										type='email'
										placeholder='Correo Electronico'
										{...field}
									/>
									{meta.touched && meta.error && (
										<div className='pt-2 text-red-600 font-semibold'>
											{meta.error}
										</div>
									)}
								</div>
							)}
						</Field>
						{/* <div className="">
							<Field name="password" placeholder="Contraseña" type="password" />
							<ErrorMessage name="password" />
						</div>
						<div className="">
							<Field
								name="verifyPassword"
								type="password"
								placeholder="Verificar Contraseña"
							/>
							<ErrorMessage name="verifyPassword" />
						</div>
						<div className="">
							<Field
								name="email"
								type="email"
								placeholder="Correo Electronico"
							/>
							<ErrorMessage name="email" />
						</div> */}
						<div className="mt-5">
							<button className="outline-none rounded-full " disabled={isSubmitting} type="submit">
								<img className="hover:border-sky-700 hover:border-2 hover:rounded-full" src={Check}></img>
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
