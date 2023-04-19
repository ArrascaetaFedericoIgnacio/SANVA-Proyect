import React, { useState } from "react";
import { Footer } from "./footer.jsx";
import { Link } from "react-router-dom";
import { Formik, Form, Field, FormikConsumer } from "formik";
import { useNavigate } from "react-router";
// import { BiPlusMedical } from 'react-icons/bi'
import { BsBriefcaseFill, BsCircle } from "react-icons/bs";
import { FaBriefcaseMedical, FaPlus } from "react-icons/fa";
import { checkSwitch } from "./switch.js";
import axios from "axios";

const SuppliesForm = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const PostInfo = async (values) => {
    try {
      console.log(values);
      const response = await axios.post(
        "https://apisanva.onrender.com/user",
        values
      );
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // setSubmitting(false)
    // PostInfo(values)
    // navigate('/user')
  };

  const validateFields = (values) => {
    const errors = {};

    // validate name
    if (!values.name) {
      errors.name = "El nombre del insumo es obligatorio";
      //       errors.name = 'El nombre del servicio es obligatorio'
    }
    // verify type
    if (!values.type) {
      errors.type = "El tipo es obligatorio";
    }
    // verify inventory
    if (!values.inventory) {
      errors.inventory = "El inventario es obligatorio";
    }
    // verify dailySupply
    if (!values.dailySupply) {
      errors.dailySupply = "Los insumos por día son obligatorios";
    }
    if (!values.provider) {
      errors.provider = "El proveedor es obligatorio";
    }

    return errors;
  };

  return (
    <div className="h-screen flex flex-col text-white bg-[#6abce2]">
      <h2 className="py-6 text-[40px]">Insumos y Servicios</h2>
      <div className="pb-3 flex justify-center items-center gap-5">
        <Link to="/serviceslist">
          <div className="p-2 rounded-full border-2 border-white">
            <BsBriefcaseFill className="text-3xl" />
          </div>
        </Link>
        {/* <Link to="/enfermedades"> */}
        <div className="relative p-2 rounded-full border-2 border-white">
          <BsBriefcaseFill className="text-3xl" />
          <FaPlus className="absolute text-blue-950 text-[1.1rem] top-[1.4rem] right-2" />
        </div>
        {/* </Link> */}
      </div>
      <Formik
        initialValues={{
          name: "",
          type: "",
          inventory: 0,
          dailySupply: 0,
          consumptionDays: 0,
          supplier: "",
          comments: "",
          lackfOfInventoryAlert: false,
        }}
        onSubmit={HandleSubmit}
        validate={validateFields}
      >
        {({ values, isSubmitting }) => (
          <Form className="flex-1 text-slate-500 bg-white">
            <button
              className="py-2 w-full rounded-none text-white bg-[#3982b8]"
              type="submit"
            >
              Agregar
            </button>
            <Field name="name">
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Nombre </label>
                    <input
                      type="text"
                      className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200"
                      placeholder="Nombre del insumo"
                      {...field}
                    ></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="type">
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className="font-medium">Tipo </label>
                    <select
                      name="type"
                      className="text-black h-9 w-[11.5rem] rounded-lg bg-white px-3.5 outline-none border-2 focus:border-sky-600 transition duration-200"
                      {...field}
                    >
                      <option value="supply">Insumo</option>
                      <option value="service">Servicio</option>
                    </select>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="inventory" disabled={values.type === "service"}>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="pt-4 pb-3 flex justify-between px-[30px] items-center">
                    <label className={`font-medium ${values.type === "service" ? "text-slate-300" : ""}`}>
                      Inventario
                    </label>
                    {/* {values.type === "service" ? (
                      <label className="font-medium text-slate-300">
                        Inventario{" "}
                      </label>
                    ) : (
                      <label className="font-medium text-slate-400">
                        Inventario{" "}
                      </label>
                    )} */}
                    <input
                      disabled={values.type === "service"}
                      type="number"
                      className={
                        values.type === "inventario"
                          ? "bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200"
                          : "bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200 text-slate-3000"
                      }
                      placeholder="0"
                      {...field}
                    ></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>

            <Field name="dailySupply" disabled={values.type === "service"}>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between px-[30px] items-center">
                    <label className={`font-medium ${values.type === "service" ? "text-slate-300" : ""}`}>
                      Insumo por día
                    </label>
                    {/* {values.type === "service" ? (
                      <label className="w-[50%] text-slate-300">
                        Insumo por día{" "}
                      </label>
                    ) : (
                      <label className="w-[50%] text-slate-400">
                        Insumo por día{" "}
                      </label>
                    )} */}
                    <input
                      disabled={values.type === "service"}
                      type="number"
                      className={
                        values.type === "inventario"
                          ? "bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200"
                          : "bg-white w-[50%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200 text-slate-3000"
                      }
                      placeholder="0"
                      {...field}
                    ></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>

            <Field name="consumptionDays" disabled={values.type === "service"}>
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="w-screen bg-white text-slate-400 py-[17.5px] flex justify-between items-center">
                    {values.type === "service" ? (
                      <label className="w-[60%] text-slate-300">
                        Días de uso{" "}
                      </label>
                    ) : (
                      <label className="w-[60%] text-slate-400">
                        Días de uso{" "}
                      </label>
                    )}
                    <select
                      name="consumptionDays"
                      disabled={values.type === "service"}
                      className="w-[40%] mr-10 bg-white text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200"
                      {...field}
                    >
                      <option value="oncePerWeek">Semanal</option>
                      <option value="oncePerThreeWeeks">
                        Cada tres semanas
                      </option>
                      <option value="oncePerFourWeeks">
                        Cada cuatro semanas
                      </option>
                      <option value="oncePerMonth">Mensual</option>
                    </select>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>

            <Field name="supplier">
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="w-screen bg-white text-slate-400 py-[16px] flex justify-between px-[30px] items-center">
                    <label className="w-[70%]">Proveedor </label>
                    <input
                      type="text"
                      className="bg-white w-[80%] text-center rounded-lg outline-none border-2 focus:border-sky-600 transition duration-200"
                      placeholder="Nombre del proveedor"
                      {...field}
                    ></input>
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>

            <Field name="comments">
              {({ field, form: { touched, errors }, meta }) => (
                <div>
                  <div className="py-4 flex justify-between px-[30px] items-center">
                    {/* <p>Comentarios</p> */}
                    <textarea
                      className="text-black h-20 w-full rounded-lg bg-white px-4 py-3 outline-none border-2 focus:border-sky-600 transition duration-200"
                      type="textarea"
                      placeholder="Comentarios"
                      style={{ resize: "none" }}
                      {...field}
                    />
                  </div>
                  {meta.touched && meta.error && (
                    <div className="pb-2 text-red-600 font-semibold">
                      {meta.error}
                    </div>
                  )}
                </div>
              )}
            </Field>
            <Field name="lackOfInventoryAlert">
              {({ field, form: { touched, errors }, meta }) => (
                <div className="border-b-[1.8px] border-[#3982b8]">
                  <div className="w-screen bg-white text-slate-400 py-[16px] flex justify-between px-[30px] items-center">
                    {values.type === "service" ? (
                      <label className="w-[70%] text-slate-300">
                        Alerta por falta de inventario:{" "}
                      </label>
                    ) : (
                      <label className="w-[70%] text-slate-400">
                        Alerta por falta de inventario:{" "}
                      </label>
                    )}
                    <input
                      className={checkSwitch}
                      type="checkbox"
                      role="switch"
                      disabled={values.type === "service"}
                      // placeholder='Alerta por falta de inventario'
                      {...field}
                      style={{ scale: "1.3" }}
                    />
                    {meta.touched && meta.error && (
                      <div className="pb-2 text-red-600 font-semibold">
                        {meta.error}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Field>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default SuppliesForm;
