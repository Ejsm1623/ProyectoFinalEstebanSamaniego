import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../global/CartView/ShoppingCartContext";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { addItem, isInCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (!isInCart(product.id)) {
      setCartCount(count);
      addItem({ ...product, quantity: count });
      setAddedToCart(true);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex flex-row">
        <h5 className="card-title">{product.title}</h5>
        <img
          src={product.pictureUrl}
          alt={product.title}
          className="card-img-top w-25"
        />
        <small className="link-dark">SKU: {product.id}</small>
        <p className="card-text">{product.description}</p>
        <strong>Precio: ${product.price}</strong>
        <br />
        <br />
        {!addedToCart && (
          <ItemCount initial={1} stock={product.stock} onAdd={handleAddToCart} />
        )}
        {addedToCart && (
          <div>
            <p>Producto agregado al carrito. Cantidad: {cartCount}</p>
            <Link to="/cart">Terminar mi compra</Link>
          </div>
        )}
      </div>
      <br />
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default ItemDetail;

export const ItemCount = ({ stock, initial, onAdd }) => {
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
      setCount(0); // Reinicia el contador después de agregar al carrito
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
      <button
        type="button"
        className="btn btn-primary"
        disabled={count === 0}
        onClick={handleAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
