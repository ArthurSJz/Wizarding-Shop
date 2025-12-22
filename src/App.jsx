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
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === itemId);
      if (!item) return prevCart;

      if (item.quantity === 1) {
        return prevCart.filter((i) => i.id !== itemId);
      } else {
        return prevCart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5005/items/")
      .then(({ data }) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar cart={cart} />
      <div className="page-container">
        <main>
          <Routes>
            <Route
              path="/"
              element={<Shop items={items} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route path="/add-item" element={<AddItem />} />
            <Route
              path="/item-details/:id"
              element={<ItemDetails addToCart={addToCart} />}
            />
            <Route path="/edit-item/:id" element={<EditItem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;