function AdminItemCard({ item }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price} €</p>

      <div className="buttons">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default AdminItemCard;
