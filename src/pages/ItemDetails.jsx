import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    async function getOneItem() {
      try {
        const { data } = await axios(`http://localhost:5005/items/${itemId}`);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneItem();
  }, [itemId]);

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={items.image} alt={items.name} />
        </div>

        <div className="card-content">
          <h3>Name: {items.name}</h3>
          <h3>Category: {items.category}</h3>
          <h3>Price: {items.price} €</h3>
          <h3>Description: {items.description} €</h3>
        </div>
      </div>
    </>
  );
}
export default ItemDetails;
