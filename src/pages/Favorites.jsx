import React from "react";
import ItemCard from "../components/shop/ItemCard";

function Favorites({ items, favorites, addToCart, toggleFavorite }) {
  // Filter only favorited items
  const favoriteItems = items.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <div className="favorites-page">
      <h2>My Favorites ❤️</h2>

      {favoriteItems.length === 0 ? (
        <p>You don't have any favorite items yet.</p>
      ) : (
        <div className="cards-container">
          {favoriteItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;