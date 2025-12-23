import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Shop from "./pages/Shop";
import About from "./components/common/About";
import Footer from "./components/common/Footer";
import Cart from "./pages/Cart";
import FormItem from "./components/admin/FormItem";
import ItemDetails from "./pages/ItemDetails";
import Admin from "./pages/Admin";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const nav = useNavigate();

  // CART
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

  //ADD & EDIT + DELETE ITEM
  async function handleAddItem(e, newItem) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5005/items", newItem);
      setItems([data, ...items]);
      nav("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditItem(e, id, updatedItem) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5005/items/${id}`,
        updatedItem
      );
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === id) {
            return data;
          } else {
            return item;
          }
        })
      );
      nav("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteItem(id) {
    try {
      const { data } = await axios.delete(`http://localhost:5005/items/${id}`);
      console.log("response to delete", data);

      const filteredItems = items.filter((oneItem) => {
        if (oneItem.id !== id) {
          return true;
        }
      });
      setItems(filteredItems);
    } catch (error) {
      console.log("error", error);
    }
  }

  //GET DATA
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
            <Route path="/about" element={<About />} />
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
            <Route
              path="/item-details/:itemId"
              element={<ItemDetails addToCart={addToCart} />}
            />
            <Route
              path="/admin"
              element={
                <Admin items={items} handleDeleteItem={handleDeleteItem} />
              }
            />
            <Route
              path="/edit-item/:id"
              element={
                <FormItem
                  title="edit"
                  items={items}
                  onSubmit={handleEditItem}
                />
              }
            />
            <Route
              path="/add-item"
              element={<FormItem title="add" onSubmit={handleAddItem} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
