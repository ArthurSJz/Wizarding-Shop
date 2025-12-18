import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>
        <h1>Hallo</h1>
        <Routes>
          <Route path='/' element={<Shop/>} />

        </Routes>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
