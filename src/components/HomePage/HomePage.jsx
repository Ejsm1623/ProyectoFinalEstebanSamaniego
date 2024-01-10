import React from "react";
import "./homePage.css";
import craftManiaLogo from "../../assets/craftmania-logo-original.png";

export default function HomePage() {
  return (
    <section className="container-fluid" id="introduction">
      <div className="row flex-lg-wrap flex-wrap-reverse py-5">
        <div className="col-sm-12 col-md-12 col-lg-5 mx-auto text-center mb-sm-5 mb-md-5 mb-5">
          <h1 className="fs-2 mb-4 text-uppercase fw-light">Bienvenido a CraftMania</h1>
          <p className="mx-4">En <em>CraftMania</em>, nos apasiona dar vida a tus celebraciones de cumpleaños y
            eventos de una manera única y
            personalizada. Ya sea que estés planeando una fiesta de cumpleaños, una reunión corporativa o cualquier otro
            evento, estamos aquí para convertir tus ideas en realidad.
            <br/><br/> Explora nuestro catálogo y descubre cómo podemos
            hacer que tu próxima celebración sea excepcional y memorable.
          </p>
          <button className="btn btn-primary py-2 px-5 fs-5 text-uppercase fw-semibold mt-3" id="header-button">Descubre
            más</button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 mx-auto d-flex justify-content-center align-items-center">
          <img src={craftManiaLogo} alt="CraftMania Brand Logo" className="img-fluid mb-4" id="head-logo" />
        </div>
      </div>
    </section>
  );
}
