import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCounter/ItemCounter";

const Item = ({ item }) => {
const id = useParams();

  return (
    <Link to={`/item/${id}`}>
      <div className="card" style={{ width: 25 + "rem" }}>
        <img src={item.pictureUrl} alt={item.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <small className="link-dark">SKU: {item.id}</small>
          <p className="card-text">{item.description}</p>
          <strong>Precio: ${item.price}</strong>
          <br />
          <br />
          <ItemCount initial={1} stock={5} />
        </div>
      </div>
    </Link>
  );
};

export default Item;
