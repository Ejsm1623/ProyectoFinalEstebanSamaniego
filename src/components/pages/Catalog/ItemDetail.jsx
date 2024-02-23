// ItemDetail.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../global/CartView/CartContextProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div className="container-fluid d-flex justify-content-center align-items-center">Cargando...</div>;
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex flex-row">
        <h5 className="card-title">{product.nombre}</h5>
        <img
          src={product.imageURL}
          alt={product.nombre}
          className="card-img-top w-25"
        />
        <small className="link-dark">SKU: {product.id}</small>
        <p className="card-text">{product.descripcion}</p>
        <strong>Precio: ${product.precio}</strong>
        <br />
        <br />
        <ItemCount stock={product.stock} onAdd={(count) => addToCart(product, count)} />
        <Link to="/">Volver a la página principal</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
