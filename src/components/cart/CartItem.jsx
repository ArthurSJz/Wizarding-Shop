import "../../App.css";

function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
          {item.price} € x {item.quantity}
        </p>
      </div>

      <div className="cart-item-buttons">
        <button
          className="cart-btn"
          onClick={() => addToCart(item)}
          aria-label={`Add one ${item.name}`}
        >
          +
        </button>
        <button
          className="cart-btn"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove one ${item.name}`}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartItem;