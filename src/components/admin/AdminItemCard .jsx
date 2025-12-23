import { Link } from "react-router-dom";

function AdminItemCard({ item, handleDeleteItem }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price} €</p>

      <div className="buttons">
        <Link to={`/edit-item/${item.id}`}>
          <button className="btn-edit">Edit</button>
        </Link>
        <button
          className="btn-delete"
          onClick={() => {
            handleDeleteItem(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AdminItemCard;
