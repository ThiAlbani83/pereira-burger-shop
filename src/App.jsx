import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [productId, setProductId] = useState(0);

  const handleItemCountChange = (newCount) => {
    setItemCount(itemCount + newCount);
  };




  return (
    <Router>
      <main>
        <Navbar itemCount={itemCount} />
        <Routes>
          <Route
            path="/"
            element={<Home onItemCountChange={handleItemCountChange}/>}
          />
          <Route path={`/product-detail/:id`} element={<ProductDetail onItemCountChange={handleItemCountChange}/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
