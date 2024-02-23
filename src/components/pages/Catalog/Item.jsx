import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: 25 + "rem" }}>
      <Link to={`/item/${item.id}`}>
        <img src={item.imageURL} alt={item.nombre} className="card-img-top" />{" "}
      </Link>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <strong>Unidades Disponibles: {item.stock}</strong>
        <br />
        <small className="link-dark">
          <strong>SKU:</strong> {item.id}
        </small>
        <p className="card-text" style={{ textAlign: "justify" }}>
          {item.descripcion}
        </p>
        <strong>Precio: ${item.precio}</strong>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Item;
