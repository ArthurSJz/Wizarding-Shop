import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FormItem({ items, categories = [], onSubmit, title }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (title === "edit" && items?.length) {
      const itemToEdit = items.find((item) => item.id === id);

      if (itemToEdit) {
        setName(itemToEdit.name || "");
        setCategory(itemToEdit.category || "");
        setPrice(itemToEdit.price || 0);
        setStock(itemToEdit.stock || 0);
        setDescription(itemToEdit.description || "");
        setImage(itemToEdit.image || "");
      }
    }
  }, [title, items, id]);

  function handleSubmit(e) {
    e.preventDefault();

    const itemData = {
      name,
      category,
      price: Number(price),
      stock: Number(stock),
      description,
      image: image || "/assets/products/placeholder.png",
    };

    if (title === "edit") {
      onSubmit(e, id, itemData);
    } else {
      onSubmit(e, itemData);
    }
  }

  return (
    <div>
      <h1>
        {title === "edit" ? "Edit magic item ✏️" : "Add a new magic item 🔮"}
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            placeholder="Add the name of an item"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories &&
              categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
          </select>
        </label>
        <label>
          Price
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </label>
        <label>
          Stock
          <input
            type="number"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            required
          />
        </label>
        <label>
          Description
          <input
            placeholder="Add a description for the item"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label className="file-upload">
          <span className="file-upload-label">Choose an image</span>
          <input
            type="file"
            className="file-input"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
          />
          {image && <span className="file-name">{image.name}</span>}
        </label>

        <button className="btn btn-primary">
          {title === "edit" ? "Save Changes" : "Add Item"}
        </button>
      </form>
    </div>
  );
}
export default FormItem;
