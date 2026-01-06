import AdminItemCard from "../components/admin/AdminItemCard ";
import { Link } from "react-router-dom";

function Admin({ items, handleDeleteItem }) {
  return (
    <div className="Admin-page">
      <Link to={"/add-item"}>
        <button className="btn btn-primary">Add Product</button>
      </Link>
      <div className="cards-container">
        {items.map((item) => (
          <AdminItemCard
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}
export default Admin;
