import React, { useState } from "react";
import "./cartBtn.css";
import cartIcon from "../../../assets/cartIcon.png";

const CartButton = () => {
  const [isExpanded, setExpanded] = useState(false);
  const notificationCount = 3; // Número hardcodeado

  const handleButtonClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`cart-button-container ${isExpanded ? "expanded" : ""}`}>
      <button
        className="btn btn-primary cart-button"
        onClick={handleButtonClick} id="cartButton"
      >
        <img src={cartIcon} alt="Icono de Carrito" className="cartImage" />

        {notificationCount > 0 && (
          <span className="notification-badge">{notificationCount}</span>
        )}
      </button>

      {isExpanded && (
        <div className="cart-modal">
          <h2 className="cart-modal-title">Lista de Productos</h2>
          <ul>
            <li>¿Qué elegiste?</li>
            <li>¿Se te ha olvidado?</li>
            <li>Solo somos elementos de prueba</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartButton;
