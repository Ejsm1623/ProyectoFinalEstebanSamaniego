import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../Buttons/ItemCounter/ItemCounter";
import CatalogNav from "./CatalogNav";

const CatalogItemList = ({ productos }) => {
  return (
<div className="d-flex flex-column justify-content-center">
 <CatalogNav/> 
 <br />
<div className="d-flex flex-wrap flex-row gap-5 px-4 pb-5">
      {productos.map((producto) => (
        <CatalogItem item={producto} />
      ))}
    </div>
</div>
  );
}

export default CatalogItemList;


const CatalogItem = ({ item }) => {
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

