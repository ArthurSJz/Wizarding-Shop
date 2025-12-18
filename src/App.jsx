import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import EditItem from './pages/EditItem';

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
          <Route path='/add-item' element={<AddItem/>} />
          <Route path='/item-details' element={<ItemDetails/>} />
          <Route path='/edit-item' element={<EditItem/>} />

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
