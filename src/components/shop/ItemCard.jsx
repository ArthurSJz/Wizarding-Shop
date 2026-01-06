import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

function ItemCard({ item, addToCart, isFavorite, toggleFavorite }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      {/* Favorite button */}
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(item.id)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <Link to={`/item-details/${item.id}`}>
        <div className="card-img">
          <img
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/products/placeholder.png";
            }}
          />
        </div>
      </Link>

      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{(Number(item.price) || 0).toFixed(2).replace(".", ",")} €</p>
      </div>

      <button
        className="btn-buy"
        onClick={() => setIsModalOpen(true)}
      >
        Buy it
      </button>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddToCart}
        message={`Do you want to add "${item.name}" to the cart?`}
      />
    </div>
  );
}

export default ItemCard;