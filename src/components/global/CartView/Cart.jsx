import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config.js";

const Cart = () => {
  const { cartList, removeItem, clear } = useContext(CartContext);
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const placeOrder = async () => {
    if (!buyerName || !buyerPhone || !buyerEmail) {
      console.error("Por favor completa todos los campos del comprador.");
      return;
    }

    const orderItems = cartList.map(item => ({
      id: item.id,
      title: item.nombre,
      quantity: item.qty,
      price: parseFloat(item.precio).toFixed(2)
    }));

    const orderData = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      items: orderItems,
      date: Timestamp.now(),
      total: cartList.reduce((acc, item) => acc + item.qty * parseFloat(item.precio), 0)
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), orderData);
      setOrderId(docRef.id);
      clear();
      setOrderPlaced(true);
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Carrito de Compras</h2>
      {cartList.length === 0 ? (
        <p className="text-center">No hay ítems en el carrito</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartList.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.imageURL} alt={item.nombre} className="me-2" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <span>{item.nombre}</span>
                    <span className="mx-2">Cantidad: {item.qty}</span>
                    <span className="mx-2">Precio unitario: ${parseFloat(item.precio).toFixed(2)}</span>
                    <span className="mx-2">Subtotal: ${(item.qty * parseFloat(item.precio)).toFixed(2)}</span>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="text-end">Total: ${cartList.reduce((acc, item) => acc + item.qty * parseFloat(item.precio), 0).toFixed(2)}</p>
          {!orderPlaced && (
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="buyerName" className="form-label">Nombre del comprador:</label>
                <input type="text" className="form-control mb-3" id="buyerName" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                <label htmlFor="buyerPhone" className="form-label">Teléfono del comprador:</label>
                <input type="text" className="form-control mb-3" id="buyerPhone" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
                <label htmlFor="buyerEmail" className="form-label">Email del comprador:</label>
                <input type="email" className="form-control mb-3" id="buyerEmail" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
                <button className="btn btn-primary" onClick={placeOrder}>Finalizar Compra</button>
              </div>
            </div>
          )}
          {orderPlaced && (
            <div className="alert alert-success mt-3" role="alert">
              Orden colocada exitosamente. El ID de su orden es: {orderId}
            </div>
          )}
          <div className="text-end">
            <button className="btn btn-secondary me-2" onClick={clear}>Vaciar Carrito</button>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
