import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from "./pages/signin"
import { Main } from './pages/mainpage'
import { Signup } from './pages/signup'
import React from 'react';
import { AuthProvider } from './authentications/AuthContext'
import { ProtectedRoute } from './authentications/ProtectedRoute'
import { PublicRoute } from './authentications/PublicRoute'

function App() {

  return <div>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<PublicRoute><Signin /></PublicRoute>} ></Route>
      <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>}></Route>
      <Route path='/main' element={<ProtectedRoute><Main></Main></ProtectedRoute>}></Route>
      <Route path='*' element={<Navigate to='/signin'/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </div>
}

export default App
