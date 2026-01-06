import { useState } from "react";
import CartItem from "../components/cart/CartItem";
import "../App.css";

function Cart({ cart, addToCart, removeFromCart }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!cart || cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🪄</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
      alert("✨ Payment Successful! Your magical items will arrive soon!");
    }, 500);
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <h3 className="cart-total">Total: {total.toFixed(2)} €</h3>

      {!paymentSuccess ? (
        <button className="btn btn-primary" onClick={handlePayment}>
          🪄 Pay Now
        </button>
      ) : (
        <p className="payment-success">
          Thank you! Your payment was successful ✨
        </p>
      )}
    </div>
  );
}

export default Cart;
