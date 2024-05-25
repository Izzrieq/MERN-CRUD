import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
