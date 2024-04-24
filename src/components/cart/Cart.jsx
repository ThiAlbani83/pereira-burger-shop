/**
 * @fileoverview Cart component
 * @author <NAME>
 */

import React, { useEffect, useState } from "react";
import { useProductContext } from "../../constants/productContext";
import { HiOutlineTrash } from "react-icons/hi2";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { selectedProducts, removeProductFromCart, clearCart } =
    useProductContext();
  const [cartUpdated, setCartUpdated] = useState(false);
  const [valorFinal, setValorFinal] = useState(0);

  useEffect(() => {
    let finalPrice = 0;
    selectedProducts.forEach((product) => {
      finalPrice += product.quantity * product.product.valor;
    });
    setValorFinal(finalPrice);
  }, [selectedProducts]);

  const handleRemoveFromCart = (productTipo) => {
    removeProductFromCart(productTipo);
    localStorage.removeItem(productTipo);
  };

  const markCartUpdated = () => {
    setCartUpdated(false);
  };

  useEffect(() => {
    markCartUpdated();
  }, [cartUpdated]);

  /*buyer simula os dados capitados através do login/cadastro do cliente  */

  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Ivina Albuquerque",
        phone: "819999999",
        email: "ivin@gmail.com",
      },
      items: selectedProducts,
      date: new Date().toLocaleString(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) =>
        alert(`Compra realizada com sucesso! \nId da compra: ${id}`)
      )
      .then(() => {
        clearCart();
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => console.error(err));
  };

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
              onClick={() => handleRemoveFromCart(product.product.tipo)}
            />
          </div>
        ))}
        <p className="text-2xl font-roboto text-primary font-bold mt-10">
          Total: R${valorFinal.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => {
          selectedProducts.length > 0 && sendOrder();
        }}
        className={
          selectedProducts.length > 0
            ? "bg-yellow-500 text-white rounded-full px-24 py-4 mt-4"
            : "bg-gray-500 text-white rounded-full px-24 py-4 mt-4 pointer-events-none"
        }
      >
        Finalizar Compra
      </button>
    </main>
  );
};

export default Cart;
