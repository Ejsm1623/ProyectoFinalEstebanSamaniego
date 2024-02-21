import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/global/NavigationBar/NavigationBar.jsx";
import Home from "./components/pages/Home/Home.jsx";
import ItemDetail from "./components/pages/Catalog/ItemDetail.jsx";
import ListLoader from "./components/pages/Catalog/ListLoader.jsx";
import { CartProvider } from "./components/global/CartView/ShoppingCartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/category/" element={<ListLoader/>}></Route>
          <Route exact path="/category/:categoryid" element={<ListLoader />}></Route>
          <Route exact path="/item/:id" element={<ItemDetail/>}></Route>
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
