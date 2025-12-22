import "../../App.css";
import { Link } from "react-router-dom";

function ItemCard({ item, addToCart }) {
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
          addToCart(item);
        }}
      >
        Buy it
      </button>
    </div>
  );
}

export default ItemCard;
