import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Cart from "./pages/Cart";
import AddItem from "./components/admin/AddItem";
import ItemDetails from "./pages/ItemDetails";
import EditItem from "./components/admin/EditItem";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/items/")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <main>
          <Routes>
            <Route path="/" element={<Shop items={items} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/item-details" element={<ItemDetails />} />
            <Route path="/edit-item" element={<EditItem />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
