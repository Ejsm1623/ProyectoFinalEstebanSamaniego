import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../jsondata/products.json";
import ItemCount from "../Buttons/ItemCounter/ItemCounter";

const DetailedItemView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      if (!isNaN(id)) {
        try {
          const foundProduct = productsData.find(
            (producto) => producto.id === parseInt(id)
          );
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError(new Error("Producto no encontrado"));
          }
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      } else {
        setError(new Error("ID de producto no válido"));
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex flex-row">
      <h5 className="card-title">{product.title}</h5>
        <img src={product.pictureUrl} alt={product.title} className="card-img-top w-25" />
          <small className="link-dark">SKU: {product.id}</small>
          <p className="card-text">{product.description}</p>
          <strong>Precio: ${product.price}</strong>
          <br />
          <br />
          <ItemCount initial={1} stock={5} />
      </div>
      <br />
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default DetailedItemView;
