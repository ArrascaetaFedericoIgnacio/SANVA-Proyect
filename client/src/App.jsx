import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { User } from './components/User'
import { Footer } from './components/footer'
import { Verification } from './components/Verification'
import Tomas from './components/Tomas'
import Alianza from './components/Alianza'


function App () {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/verification" element={<Verification />} />
          <Route path='/tomas' element={<Tomas />} />
          <Route path='/alianza' element={<Alianza />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
