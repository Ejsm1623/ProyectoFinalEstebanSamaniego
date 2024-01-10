import React from "react";
import NavBar from "./components/NavigationBar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="¡Bienvenido a CraftMania Shop" />
      <HomePage />
    </>
  );
}

export default App;
