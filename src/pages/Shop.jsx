import ItemCard from "../components/ItemCard";

function Shop({ items }) {
  return (
    <div>
      <div className="cards-container">
        {items.map((item) => {
          return <ItemCard items={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
export default Shop;
