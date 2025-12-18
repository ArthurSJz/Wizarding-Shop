import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import AddItem from "./pages/AddItem"
import Cart from "./pages/Cart"
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/item-detail" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
