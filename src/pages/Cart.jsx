import CartItem from "../components/cart/CartItem";
import "../App.css";

function Cart({ cart, addToCart, removeFromCart }) {
  if (!cart || cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🪄</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

      <h3 className="cart-total">Total: {total} €</h3>
    </div>
  );
}

export default Cart;