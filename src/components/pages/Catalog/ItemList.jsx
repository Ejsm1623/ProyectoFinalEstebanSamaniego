import React from "react";
import ListNavigation from "./ListNavigation";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <ListNavigation />
      <br />
      <div className="d-flex flex-wrap flex-row gap-5 px-4 pb-5">
        {productos &&
          productos.map((producto) => (
            <Item key={producto.id} item={producto}/>
          ))}
      </div>
    </div>
  );
};

export default ItemList;

