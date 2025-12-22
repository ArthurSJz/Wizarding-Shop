import "../../App.css";

function ItemCard({ item, addToCart }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>Price: {item.price} €</p>
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