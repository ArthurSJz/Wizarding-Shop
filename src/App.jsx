import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Shop from './pages/Shop'
import { Routes, Route } from "react-router-dom";
import Footer from './components/common/Footer';
import Cart from './pages/Cart';
import ItemDetails from './pages/ItemDetails';
import Admin from './pages/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>
        <h1>Hallo</h1>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/item-details' element={<ItemDetails/>} />
          
        </Routes>

        <Footer/>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
