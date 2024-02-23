import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/global/NavigationBar/NavigationBar.jsx";
import Home from "./components/pages/Home/Home.jsx";
import ListLoader from "./components/pages/Catalog/ListLoader.jsx";
import CartContextProvider from "./components/global/CartView/CartContextProvider.jsx";
import Cart from "./components/global/CartView/Cart.jsx";
import ItemDetailContainer from "./components/pages/Catalog/ItemDetailContainer.jsx";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/category/" element={<ListLoader/>}></Route>
          <Route exact path="/category/:categoryid" element={<ListLoader />}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
