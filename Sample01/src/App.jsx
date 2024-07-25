import React from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App