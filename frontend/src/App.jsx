import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Student from './Components/Student'
import Create from './Components/Create'
import Update from './Components/Update'

function App() {
  const [output, setOutput] = useState([]);

  axios.get("http://localhost:3000/")
  .then(res=>console.log(setOutput(res.data.msg)));
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

export default App
