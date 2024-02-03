import React from "react";
import logoImage from "../assets/craftmania-logo-original.png";
import { Link } from "react-router-dom";
import 'animate.css';

export default function Logo({animateClass}) {    
    return (
    <Link to={"/"}>
      <img
        src={logoImage}
        alt="Logo"
        width="175"
        className={`d-inline-block align-text-top ${animateClass}`}
      >
      </img>
    </Link>
  );
}
