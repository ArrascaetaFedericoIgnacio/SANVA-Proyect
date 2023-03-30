import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { User } from './components/User'
import { Footer } from './components/footer'

function App () {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
