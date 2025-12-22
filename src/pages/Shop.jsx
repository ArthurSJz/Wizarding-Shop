import { useState } from "react";
import ItemCard from "../components/shop/ItemCard";

function Shop({ items, addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  if (!items.length) {
    return <p>Loading magical items...</p>;
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="shop-page">
      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search magical items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="wands">Wands</option>
          <option value="potions">Potions</option>
          <option value="books">Books</option>
        </select>
      </div>

      <div className="cards-container">
        {filteredItems.length === 0 && <p>No magical items found 🧙‍♂️</p>}
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;