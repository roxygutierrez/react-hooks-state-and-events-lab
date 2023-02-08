import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const classStatus = isInCart ? "in-cart" : "";

  const handleAddingNewItem = () => {
    setIsInCart((isInCart) => !isInCart);
  };

  return (
    <li className={classStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddingNewItem}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
