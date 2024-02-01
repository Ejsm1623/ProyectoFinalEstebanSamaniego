import React, { useState, useEffect } from "react";
import "./itemCount.css";

export default function itemCounter({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount((prevCount) => Math.min(prevCount, stock));
  }, [stock]);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, stock));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
    }
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
      <button type="button" className="btn btn-primary" disabled={count === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
