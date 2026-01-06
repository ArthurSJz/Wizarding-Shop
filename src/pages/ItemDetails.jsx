import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../components/common/ConfirmModal";

function ItemDetails({ addToCart, categories }) {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsModalOpen(false);
  };

  const itemCategory = categories?.find((cat) => cat.name === item.category);

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
          <h3 className="details-title">{item.name}</h3>
          {itemCategory && (
            <div className="pill">
              {itemCategory.icon && (
                <span className="pill-icon">{itemCategory.icon}</span>
              )}
              {itemCategory.name}
            </div>
          )}
          <h3>€ {item.price} EUR</h3>
          <h3>Description: {item.description}</h3>

          <div className="buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Buy it
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                nav(-1);
              }}
            >
              Go Back
            </button>
          </div>
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
