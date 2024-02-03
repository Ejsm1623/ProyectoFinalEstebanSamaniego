import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
import 'animate.css/animate.min.css';
import Logo from "../logo";

export default function LandingPage () {

    useEffect(() => {
        // Inicia el temporizador para redireccionar después de 2 segundos (2000 ms)
        const redirectTimer = setTimeout(() => {
          // Redirige a la nueva ruta
          redirect("/home");
        }, 2000);
    
        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(redirectTimer);
      }, [history]);

    return (
        <>
        <Logo animateClass={"animate__fadeInUp"}></Logo>
        </>
    )
}