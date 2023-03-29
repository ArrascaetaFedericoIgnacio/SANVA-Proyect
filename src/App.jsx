import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { User } from './components/User';
import { Footer } from './components/footer';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
  


}

export default App
