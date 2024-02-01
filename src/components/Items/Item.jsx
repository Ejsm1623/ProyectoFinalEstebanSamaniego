// Item.jsx
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCounter/ItemCounter";

const Item = ({ item }) => {
  return (
    
      <div className="card" style={{ width: 25 + "rem" }}>
        <Link to={`/item/${item.id}`}><img src={item.pictureUrl} alt={item.title} className="card-img-top" />    </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <small className="link-dark">SKU: {item.id}</small>
          <p className="card-text">{item.description}</p>
          <strong>Precio: ${item.price}</strong>
          <br />
          <br />
        </div>
        <ItemCount initial={1} stock={5} />
      </div>
  );
};

export default Item;
