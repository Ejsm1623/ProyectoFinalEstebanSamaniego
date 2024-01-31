import React from "react";
import Item from "./Item";
import CategorySeacher from "../CategorySeacher/CategorySearcher";

const ItemList = ({ productos }) => {
  return (
<div className="d-flex flex-column justify-content-center">
 <CategorySeacher/> 
 <br />
<div className="d-flex flex-wrap flex-row gap-5 px-4 pb-5">
      {productos.map((producto) => (
        <Item item={producto} />
      ))}
    </div>
</div>
  );
}

export default ItemList;
