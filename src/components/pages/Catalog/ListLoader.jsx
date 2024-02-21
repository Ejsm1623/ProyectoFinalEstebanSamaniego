import productsData from "../../../jsondata/products.json";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ListLoader = () => {
  const [productos, setProductos] = useState([]);
  const { categoryid: itemCategory } = useParams();

  useEffect(() => {
    const loadProducts = () => {
      if (!itemCategory) {
        // Si no hay categoría especificada, aplicar retraso de 2 segundos
        setTimeout(() => {
          setProductos(productsData);
        }, 2000);
      } else {
        // Si hay categoría especificada, filtrar productos inmediatamente
        const filteredProducts = productsData.filter((item) => item.categoria === itemCategory);
        setProductos(filteredProducts);
      }
    };

    loadProducts();
  }, [itemCategory]);

  return <ItemList productos={productos} />;
};

export default ListLoader;
