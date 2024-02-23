import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { db } from "../../../firebase/config.js";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


const ListLoader = () => {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const fetchProductos = async () => {
      const productosRef = collection(db, "products");
      const querySnapshot = await getDocs(productosRef);
      const productosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(productosData);
    };

    fetchProductos();
  }, []);

  return <ItemList productos={productos} />;
};

export default ListLoader;