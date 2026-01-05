import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Navbar from "./components/common/Navbar";
import Shop from "./pages/Shop";
import About from "./components/common/About";
import Footer from "./components/common/Footer";
import Cart from "./pages/Cart";
import FormItem from "./components/admin/FormItem";
import ItemDetails from "./pages/ItemDetails";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import axios from "axios";
import NotFoundPage from "./pages/NotFoundPage";
import Toast from "./components/toast/Toast";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [loading, setLoading] = useState(true);
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

  function showToast(message, type = "success") {
    setToast({ message, type });
  }

  //ADD & EDIT + DELETE ITEM
  async function handleAddItem(e, newItem) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5005/items", newItem);
      setItems([data, ...items]);
      showToast("Item added successfully", "success");
      nav("/admin");
    } catch (error) {
      console.log(error);
      showToast("Failed to add item", "error");
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
      showToast("Item updated successfully!", "success");
      nav("/admin");
    } catch (error) {
      console.log(error);
      showToast("Failed to update item", "error");
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
      showToast("Item deleted successfully!", "success");
    } catch (error) {
      console.log("error", error);
      showToast("Failed to delete item", "error");
    }
  }

  //GET DATA
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5005/items/")
      .then(({ data }) => setItems(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar cart={cart} />
      <div className="page-container">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Shop items={items} addToCart={addToCart} loading={loading} />
              }
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
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin items={items} handleDeleteItem={handleDeleteItem} />
                </ProtectedRoute>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: "", type: "success" })}
        />
      )}
    </>
  );
}

export default App;
