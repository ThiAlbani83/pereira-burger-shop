import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);
export const useProductIds = () => useContext(ProductContext);
export const useProductCategory = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    // Recuperar os dados do carrinho do localStorage ao carregar a página
    const storedProducts = localStorage.getItem("selectedProducts");
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProductToCart = (product, quantity) => {
    const updatedProducts = [...selectedProducts];
    const existingProductIndex = updatedProducts.findIndex(
      (item) => item.product.tipo === product.tipo
    );

    if (existingProductIndex !== -1) {
      updatedProducts[existingProductIndex].quantity += quantity;
    } else {
      updatedProducts.push({ product, quantity });
    }

    // Atualizar os dados do carrinho no localStorage
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };

  const removeProductFromCart = (productTipo) => {
    const updatedProducts = selectedProducts.filter(
      (item) => item.product.tipo !== productTipo
    );
    // Atualizar os dados do carrinho no localStorage
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };

  const clearCart = () => {
    localStorage.removeItem("selectedProducts");
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProducts,
        addProductToCart,
        removeProductFromCart,
        productIds,
        setProductIds,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
