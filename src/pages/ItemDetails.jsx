import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../components/common/ConfirmModal";

function ItemDetails({ addToCart }) {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function getOneItem() {
      try {
        const { data } = await axios(`http://localhost:5005/items/${itemId}`);
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneItem();
  }, [itemId]);

  return (
    <>
      <div className="details-page">
        <div className="details-img">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="details-content">
          <h3>Name: {item.name}</h3>
          <h3>Category: {item.category}</h3>
          <h3>Price: {item.price} €</h3>
          <h3>Description: {item.description}</h3>
        </div>

        <div className="buttons">
          <button
            className="btn-buy"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Buy it
          </button>

          <button
            className="btn-back"
            onClick={() => {
              nav(-1);
            }}
          >
            Go Back
          </button>
        </div>

        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleAddToCart}
          message={`Do you want to add "${item.name}" to the cart?`}
        />
      </div>
    </>
  );
}
export default ItemDetails;
