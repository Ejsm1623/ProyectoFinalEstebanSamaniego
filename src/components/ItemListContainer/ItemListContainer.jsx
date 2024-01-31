import productsData from "../../products/products.json";
import React, { useState, useEffect } from "react";
import ItemList from "../Items/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categoryid} = useParams();
  console.log(categoryid)

useEffect(() => {
  const promesa = new Promise ((resolve) => {
    resolve(categoryid ? productsData.filter(item => item.categoria === categoryid) : productsData)
  })

  promesa.then (productsData => {
    setProductos(productsData)
  })
}, [categoryid]);


  return <ItemList productos={productos} />;
};

export default ItemListContainer;
