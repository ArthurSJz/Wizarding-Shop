import AdminItemCard from "../components/admin/AdminItemCard ";
import axios from "axios";

function Admin({ items, setItems }) {
  async function handleDeleteItem(id) {
    try {
      const { data } = await axios.delete(`http://localhost:5005/items/${id}`);
      console.log("response to delete", data);

      const filteredItems = items.filter((oneItem) => {
        if (oneItem.id !== id) {
          return true;
        }
      });
      setItems(filteredItems);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="Admin-page">
      <h1>Admin Page</h1>

      <button className="btn-add">Add Product</button>
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
