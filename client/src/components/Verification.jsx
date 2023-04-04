import React, { useState } from 'react'
import { Button, Input } from 'antd'
import nodemailer from 'nodemailer'

const CodeGenerator = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setCode(code)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña'
      }
    })

    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to: email,
      subject: 'Código de verificación',
      text: `Tu código de verificación es: ${code}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Correo enviado: ' + info.response)
      }
    })
  }

  return (
    <div>
      <Input placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="primary" onClick={generateCode}>Generar código</Button>
      {code && <p>Tu código es: {code}</p>}
    </div>
  )
}

export default CodeGenerator
