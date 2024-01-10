import React from "react";
import "./navbar.css";
import CartButton from "../Cart/CartButton.jsx"; // Importa el componente CartButton

export default function NavBar() {
  return (
    <header className="container-fluid nav-container">
      <nav className="navbar navbar-expand-lg bg-body-light" id="custom-navbar">
        <a className="navbar-brand d-md-block d-lg-none" href="#">
          <span className="navbar-title" id="navbar-brandtitle">CraftMania Shop</span>
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-uppercase fw-light">
            <li className="nav-item">
              <a
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                Catalogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                Entregas & Pedidos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                Contacto
              </a>
            </li>
          </ul>

          {/* Añade el componente CartButton directamente en la barra de navegación */}
          <CartButton />
        </div>
      </nav>
    </header>
  );
}
