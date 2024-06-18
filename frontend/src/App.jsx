import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from "./pages/signin"
import { Main } from './pages/main'
import { Signup } from './pages/signup'
import { AuthProvider } from './authentications/AuthContext'
import { ProtectedRoute } from './authentications/ProtectedRoute'

function App() {

  return <div>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<ProtectedRoute><Signin></Signin></ProtectedRoute>}></Route>
      <Route path='/signup' element={<ProtectedRoute><Signup></Signup></ProtectedRoute>}></Route>
      <Route path='/main' element={<ProtectedRoute><Main></Main></ProtectedRoute>}></Route>
      <Route path='*' element={<Navigate to='/main'/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </div>
}

export default App
