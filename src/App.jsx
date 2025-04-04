import React from 'react'
import Contect from './pages/Contect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowData from './pages/ShowData'
import EditData from './pages/EditData'
import AuthenticationsSignUp from './pages/AuthenticationsSignUp'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Contect/>} />
         <Route path='/showdata' element={<ShowData/>} />
         <Route path='/editdata' element={<EditData/>} />
         <Route path='/signpage' element={<AuthenticationsSignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App