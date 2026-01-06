import { useState } from "react";
import ItemCard from "../components/shop/ItemCard";
import hourglass from "../assets/hourglass-icon.png";

function Shop({ items, categories, addToCart, loading, favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

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
    if (!item?.name || !item?.category) return false;

    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    const matchesFavorites = !showOnlyFavorites || favorites.includes(item.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  return (
    <div className="shop-page">
      {/* Controls */}
      <div className="shop-controls">
        <input
          className="search-bar"
          type="text"
          placeholder="Search magical items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-pills">
          {/* All categories button */}
          <button
            className={`pill ${category === "all" ? "active" : ""}`}
            onClick={() => setCategory("all")}
          >
            ✨ All
          </button>

          {/* Category buttons */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`pill ${category === cat.name ? "active" : ""}`}
              onClick={() => setCategory(cat.name)}
            >
              {cat.icon && <span className="pill-icon">{cat.icon}</span>}
              {cat.label || cat.name}
            </button>
          ))}

          {/* Favorites toggle button */}
          <button
            className={`pill ${showOnlyFavorites ? "active" : ""}`}
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
          >
            ❤️ Favorites Only
          </button>
        </div>
      </div>

      {/* Items */}
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
          <ItemCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            isFavorite={favorites.includes(item.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;