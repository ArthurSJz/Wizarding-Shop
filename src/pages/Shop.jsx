import { useState } from "react";
import ItemCard from "../components/shop/ItemCard";
import hourglass from "../assets/hourglass-icon.png";

function Shop({ items, addToCart, loading }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const dumbledoreGif =
    "https://tenor.com/view/dumbledore-well-i-tried-whatever-harry-potter-gif-15849262.gif";

  if (loading) {
    return (
      <div className="loading-container">
        <img src={hourglass} alt="Loading..." className="hourglass-spinner" />
      </div>
    );
  }

  const filteredItems = items.filter((item) => {
    const name = item.name || "";
    const itemCategory = item.category || "";

    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || itemCategory === category;

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
        {filteredItems.length === 0 && (
          <div className="no-items-found">
            <p>No magical items found 🧙‍♂️</p>
            <img
              src={dumbledoreGif}
              alt="dumbledore shrugging"
              className="no-items-found-gif"
            />
          </div>
        )}
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
