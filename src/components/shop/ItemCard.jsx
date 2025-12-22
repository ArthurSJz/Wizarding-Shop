import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

function ItemCard({ item, addToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <Link to={`/item-details/${item.id}`}>
        <div className="card-img">
          <img src={item.image} alt={item.name} />
        </div>
      </Link>
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.price.toFixed(2).replace(".", ",")} €</p>
      </div>
      <button
        className="btn-buy"
        onClick={() => {
          console.log("Adding to cart:", item); // debug
          setIsModalOpen(true);
        }}
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
