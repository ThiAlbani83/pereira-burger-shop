import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ItemList from "./components/hero/ItemList";
import { ProductProvider } from "./constants/productContext";
import Cart from "./components/cart/Cart";

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
              path={`/product-detail/:id`}
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
          </Routes>
        </ProductProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;