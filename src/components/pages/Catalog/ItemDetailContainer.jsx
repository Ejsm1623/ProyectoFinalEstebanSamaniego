import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((resp) => {
      const data = { ...resp.data(), id: resp.id };
      console.log("Data del producto:", data); // Aquí agregamos el console.log
      setProducto(data);
    });
  }, [id]);

  return <ItemDetail product={producto} />;
};

export default ItemDetailContainer;
