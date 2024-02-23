import React, { useState } from "react";
import "../../styles/itemCount.css"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
    setCount(1); // Reinicia el contador después de agregar al carrito
  };

  return (
    <div className="buttonsWrapper p-4 gap-4">
      <div className="addCartBtnWrapper">
        <button className="decrementBtn" onClick={handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button className="addBtn" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
