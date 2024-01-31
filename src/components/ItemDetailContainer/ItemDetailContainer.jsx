import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../products/products.json';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      // Verificar si el itemId es un número válido
      if (!isNaN(itemId)) {
        setTimeout(() => {
          try {
            // Buscar el producto en el JSON por id
            const foundProduct = productsData.find(producto => producto.id === parseInt(itemId));
            if (foundProduct) {
              setProduct(foundProduct);
            } else {
              setError(new Error('Producto no encontrado'));
            }
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }, 2000);
      } else {
        setError(new Error('ID de producto no válido'));
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
<div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{item.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
