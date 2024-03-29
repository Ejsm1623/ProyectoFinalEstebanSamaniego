import React from "react";
import "../../styles/home.css";
import craftManiaLogo from "../../../assets/craftmaniaLogo.png";

export default function Home() {
  return (
    <section className="container-fluid" id="introduction">
      <div className="row flex-lg-wrap flex-wrap-reverse py-5">
        <div className="col-sm-12 col-md-12 col-lg-5 mx-auto text-center mb-sm-5 mb-md-5 mb-5">
          <h1 className="fs-2 mb-4 text-uppercase fw-light">
            Bienvenidos a CraftMania
          </h1>
          <p className="mx-4">
            En <em>CraftMania</em>, nos apasiona dar vida a tus celebraciones.
            Desde cumpleaños a eventos o simples souvenirs; siempre de una
            manera única y personalizada.
            <br /> <br />
            Una fiesta de cumpleaños, una reunión corporativa, un regalo para un
            familiar, amigo o pareja. Explora nuestro catálogo y descubre cómo podemos hacer que tu
            próxima celebración sea excepcional y memorable.
          </p>
          <button
            className="btn btn-primary py-2 px-5 fs-5 text-uppercase fw-semibold mt-3"
            id="header-button"
          >
            Ver Catálogo
          </button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 mx-auto d-flex justify-content-center align-items-center">
          <img
            src={craftManiaLogo}
            alt="CraftMania Brand Logo"
            className="img-fluid mb-4"
            id="head-logo"
          />
        </div>
      </div>
    </section>
  );
}
