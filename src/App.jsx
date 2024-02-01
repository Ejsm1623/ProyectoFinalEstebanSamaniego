import React from "react";
import NavBar from "./components/NavigationBar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import CatalogItem from "./components/CatalogPage/CatalogPage.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailedItemView from "./components/CatalogPage/DetailedItemView.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/category/" element={<CatalogItem />}></Route>
        <Route exact path="/category/:categoryid" element={<CatalogItem />}></Route>
        <Route exact path="/item/:id" element={<DetailedItemView/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
