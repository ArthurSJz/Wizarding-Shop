import { Link } from "react-router-dom";

function ItemCard({ items }) {
  return (
    <>
      <div className="card">
        <div className="card-img">
         <Link to={`/item-details/${items.id}`}>
          <img src={items.image} alt={items.name} />
         </Link>
        </div>
        <div className="card-content">
        <Link to={`/item-details/${items.id}`}>
        <h3> {items.name} </h3>
        </Link>
          <h3>Price: {items.price} €</h3>
        </div>

        <div className="buttons">
          <button className="btn-buy">Buy it</button>
        </div>
      </div>
    </>
  );
}
export default ItemCard;
