import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../global/CartView/CartContextProvider";
import cartIcon from "../../assets/shoppingCartIcon.png";
import "../styles/cartButton.css"

const CartIcon = () => {
  const { cartList } = useContext(CartContext);
  const notificationCount = cartList.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img src={cartIcon} alt="Icono de Carrito" className="cartImage" />
        {notificationCount > 0 && (
          <span className="notification-badge">{notificationCount}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
