import React from 'react'
import { useField } from 'formik'
import DatePicker from 'react-datepicker'

const DatePikerField = ({ ...props }) => {
//   const { setFieldValue } = useFormikContext()
  const [field, , { setValue }] = useField(props)

  return (
    <div><div className='flex justify-between'>
    <DatePicker
    {...field}
    {...props}
    selected={field.value && new Date(field.value)}
    onChange={(date) => setValue(date)}
    placeholderText='Elegir fecha'
    dateFormat="dd/MM/yyyy"
    className="text-black h-10 w-[10.5rem] rounded-lg bg-white px-5 outline-none border-2 focus:border-sky-600 transition duration-200"
    dropdownMode="select"
    scrollableMonthYearDropdown="true" showMonthDropdown="true" showYearDropdown="true"></DatePicker>
  </div></div>
  )
}

export default DatePikerField
