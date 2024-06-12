//import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from "./pages/signin"
import { Main } from './pages/main'
import { Signup } from './pages/signup'

function App() {

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/main' element={<Main></Main>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App
