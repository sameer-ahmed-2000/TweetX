import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from "./pages/signin"
import { Main } from './pages/mainpage'
import { Signup } from './pages/signup'
import { AuthProvider } from './authentications/AuthContext'
import { ProtectedRoute } from './authentications/ProtectedRoute'
import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  return <div>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path='/signup' element={<ProtectedRoute><Signup></Signup></ProtectedRoute>}></Route>
      <Route path='/mainpage' element={<ProtectedRoute><Main></Main></ProtectedRoute>}></Route>
      <Route path='*' element={<Navigate to='/mainpage'/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </div>
}

export default App
