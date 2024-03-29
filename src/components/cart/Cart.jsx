import React, { useEffect, useState } from "react";
import { useProductContext } from "../../constants/productContext";
import { HiOutlineTrash } from "react-icons/hi2";

const Cart = () => {
  const { selectedProducts, removeProductFromCart } = useProductContext();
  const [cartUpdated, setCartUpdated] = useState(false);
  const [valorFinal, setValorFinal] = useState(0);

  useEffect(() => {
    let finalPrice = 0;
    selectedProducts.forEach((product) => {
      finalPrice += product.quantity * product.product.valor;
    });
    setValorFinal(finalPrice);
  }, [selectedProducts]);

  const handleRemoveFromCart = (productId) => {
    removeProductFromCart(productId);
    console.log(selectedProducts);
    localStorage.removeItem(productId);
  };

  // Defina uma função para marcar o carrinho como atualizado e, em seguida, redefina-o após a re-renderização
  const markCartUpdated = () => {
    setCartUpdated(false);
  };

  // Use a função markCartUpdated como um efeito secundário para redefinir o estado local após a re-renderização
  useEffect(() => {
    markCartUpdated();
  }, [cartUpdated]);

  return (
    <main className="w-full flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bungee">Carrinho de Compras</h2>
      <div className="flex flex-col items-end  gap-5 mt-20">
        {selectedProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 w-full max-w-[550px]"
          >
            <img
              src={product.product.imagem}
              alt="img"
              className="w-24 h-24 rounded-md shadow-lg"
            />
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-lg font-roboto font-bold text-gray-900">
                {product.product.tipo}
              </p>
              <p>Quantidade: {product.quantity}</p>
              <p>Preço: R${product.quantity * product.product.valor}</p>
            </div>
            <HiOutlineTrash
              size={45}
              className="cursor-pointer text-primary"
              onClick={() => handleRemoveFromCart(product.product.id)}
            />
          </div>
        ))}
        <p className="text-2xl font-roboto text-primary font-bold mt-10">Total: R${valorFinal}</p>
      </div>
    </main>
  );
};

export default Cart;
