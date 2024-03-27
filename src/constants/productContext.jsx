import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Recuperar os dados do carrinho do localStorage ao carregar a página
    const storedProducts = localStorage.getItem('selectedProducts');
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProductToCart = (product, quantity) => {
    const updatedProducts = [...selectedProducts];
    const existingProductIndex = updatedProducts.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedProducts[existingProductIndex].quantity += quantity;
    } else {
      updatedProducts.push({ product, quantity });
    }

    // Atualizar os dados do carrinho no localStorage
    localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };

  const removeProductFromCart = (productId) => {
    const updatedProducts = selectedProducts.filter((item) => item.product.id !== productId);
    // Atualizar os dados do carrinho no localStorage
    localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, addProductToCart, removeProductFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};
