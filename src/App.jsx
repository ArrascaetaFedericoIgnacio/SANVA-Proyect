import './App.css'
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { User } from './components/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
  


}

export default App
