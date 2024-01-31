import React from "react";
import NavBar from "./components/NavigationBar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/category/" element={<ItemListContainer />}></Route>
        <Route exact path="/category/:categoryid" element={<ItemListContainer />}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
