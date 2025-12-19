function ItemCard({ items }) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={items.image} alt={items.name} />
        </div>
        <div className="card-content">
          <h3>Name: {items.name}</h3>
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
