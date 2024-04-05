import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import * as firebase from "./firebase/firebase";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ItemList from "./components/hero/ItemList";
import { ProductProvider } from "./constants/productContext";
import Cart from "./components/cart/Cart";
import Admin from "./pages/Admin"
import Hamburgers from "./pages/Hamburgers"
import Porcoes from "./pages/Porcoes"
import Drinks from "./pages/Drinks"

function App() {
  const [itemCount, setItemCount] = useState(0);

  const handleItemCountChange = (newCount) => {
    setItemCount(itemCount + newCount);
  };

  return (
    <BrowserRouter>
      <main>
        <ProductProvider>
          <Navbar /* itemCount={itemCount}  */ />
          <Routes>
            <Route
              path="/"
              element={<Home onItemCountChange={handleItemCountChange} />}
            />
            <Route
              path={`/product-detail/:category/:ref`}
              element={
                <ProductDetail onItemCountChange={handleItemCountChange} />
              }
            />
            <Route
              path={`/category/:id`}
              element={<ItemList onItemCountChange={handleItemCountChange} />}
            />
            <Route
              path={`/cart`}
              element={<Cart onItemCountChange={handleItemCountChange} />}
            />
            <Route
              path={`/admin`}
              element={<Admin />}
            />
            <Route
              path={`/hamburgers`}
              element={<Hamburgers />}
            />
            <Route
              path={`/porcoes`}
              element={<Porcoes />}
            />
            <Route
              path={`/bebidas`}
              element={<Drinks />}
            />
          </Routes>
        </ProductProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;