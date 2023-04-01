	import React from "react";
	import { Formik, Form, Field, ErrorMessage } from "formik";
	import { HiOutlineUser, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
	import { CheckIcon } from "./check";
	import Check from "../../public/checked.svg"
	import Logo from "../../public/logosanva.png"
	import axios from 'axios';
	import { useNavigate } from "react-router-dom";
	import { SMTPClient } from 'emailjs';


	export const Register = () => {
		const navigate = useNavigate()
	// crea una función para enviar el código por correo electrónico utilizando la nueva documentación
	const EnviarCodigo = (email) => {
		const client = new SMTPClient({
		user: 'user',
		password: 'password',
		host: 'smtp.your-email.com',
		ssl: true,
		});
	
		client.send(
		{
			text: `Tu código de verificación es: ${localStorage.getItem("codigo")}`,
			from: 'you <username@your-email.com>',
			to: email,
			subject: 'Código de verificación',
		},
		(err, message) => {
			console.log(err || message);
		}
		);
	};
	
	const CrearCuenta = async (values) => {
		try {
		console.log(values);
		const resultado = await axios.post(
			'https://purebadeploy.onrender.com/user',
			values
		);
		EnviarCodigo(values.email); // enviar el código de verificación por correo electrónico
		console.log(resultado);
		navigate('/user');
		} catch (error) {
		console.log(error);
		}
	};
	
	const HandleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
		console.log(values);
		const email = values.email; // obtener el valor del campo de entrada de correo electrónico
		//guarda en localstorage el email
		localStorage.setItem("email", email);
		CrearCodigo(); // crear un nuevo código de verificación
		CrearCuenta(values); // crear la cuenta y enviar el código de verificación por correo electrónico
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
			<div className="relative w-screen h-screen flex justify-center items-center">
			<div className="absolute w-screen h-screen -translate-y-40 skew-y-[40deg] bg-[#6abce2]"></div>
			<div className="absolute w-screen h-screen translate-y-20 skew-y-[40deg] bg-[#58afdd]"></div>
			<div className="absolute w-screen h-screen translate-y-[48rem] skew-y-[40deg] bg-[#3982b8]"></div>
			<div className="absolute h-screen w-full flex flex-col justify-center items-center xl:pt-8 pt-20">
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
											className='text-black  h-10 w-64 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
											className='text-black h-10 w-64 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
					
							<Field name='email'>
								{({ field, form: { touched, errors }, meta }) => (
									<div>
										<input
											className='text-black  h-10 w-64 rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200'
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
					
							<div className="mt-5">
								<button className="outline-none rounded-full " disabled={isSubmitting} type="submit">
									<img className="hover:border-sky-700 hover:border-2 hover:rounded-full" src={Check}></img>
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			</div>
		);
	};