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
    placeholderText='Fecha de Nacimiento'
    dateFormat="dd/MM/yyyy"
    className="bg-white text-black"
    dropdownMode="select"
    scrollableMonthYearDropdown="true" showMonthDropdown="true" showYearDropdown="true"></DatePicker>
  </div></div>
  )
}

export default DatePikerField
