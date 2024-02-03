import React from "react";
import "./css/navbar.css";
import CartButton from "../Buttons/Cart/CartBtn.jsx"; // Importa el componente CartButton
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo.jsx";

export default function NavBar() {
  const currentLocation = useLocation();
  const noRenderRoute = location.pathname === "/";

  return (
    <header className="container-fluid nav-container">
      <nav className="navbar navbar-expand-lg bg-body-light" id="custom-navbar">
        <Link to={"/"} className="navbar-brand d-md-block d-lg-none" href="#">
          <span className="navbar-title" id="navbar-brandtitle">
            CraftMania Shop
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-uppercase fw-light align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link active mx-3"
                aria-current="page"
                to={"/"}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"category/"} className="nav-link mx-3">
                Catalogo
              </Link>
            </li>
            {/* {!noRenderRoute && (
              <li>
                <Logo />
              </li>
            )} */}
            <li className="nav-item">
              <a className="nav-link mx-3">Entregas & Pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3">Contacto</a>
            </li>
          </ul>
          {/* <CartButton /> */}
        </div>
      </nav>
    </header>
  );
}
