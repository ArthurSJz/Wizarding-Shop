import AdminItemCard from "../components/admin/AdminItemCard ";

function Admin({ items }) {
  return (
    <div className="Admin-page">
      <h1>Admin Page</h1>
      <div className="cards-container">
        {items.map((item) => (
          <AdminItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Admin;
