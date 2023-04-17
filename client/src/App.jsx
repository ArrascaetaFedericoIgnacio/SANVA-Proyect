import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { User } from './components/User'
import { Footer } from './components/footer'
import { Verification } from './components/Verification'
import Tomas from './components/Tomas'
import Alianza from './components/Alianza'
import { PersonalData } from './components/PersonalData'
import NuevaToma from './components/NuevaToma'
import FormEnfermedades from './components/Form/FormEnfermedades'
import DiseasesList from './components/DiseasesList'
import DrugsList from './components/DrugsList'
import DrugsForm from './components/DrugsForm'
import AllergiesForm from './components/AllergiesForm'
import SuppliesForm from './components/SuppliesForm'

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
          <Route path='/nuevatoma' element={<NuevaToma />} />
          <Route path='/alianza' element={<Alianza />} />
          <Route path='/DrugsList' element={<DrugsList/>} />
          <Route path='/DrugsForm' element={<DrugsForm/>} />
          <Route path='/PersonalData' element={<PersonalData />} />
          <Route path='/DiseasesList' element={<DiseasesList />} />
          <Route path='/enfermedades' element={<FormEnfermedades />} />
          <Route path='/nuevaAlergia' element={<AllergiesForm />} />
          <Route path='/nuevoInsumo' element={<SuppliesForm />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
