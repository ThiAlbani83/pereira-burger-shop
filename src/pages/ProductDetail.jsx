import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Loader from "../components/Loader";
import { useProductContext, useProductIds } from "../constants/productContext";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

function ProductDetail({ onItemCountChange }) {
  const { ref, category } = useParams();
  const { productIds } = useProductIds();
  const { addProductToCart } = useProductContext(); 
  const [product, setProduct] = useState(null); // Changed to null
  const [loading, setLoading] = useState(true);
  const [ingredientes, setIngredientes] = useState([]);
  const [itemCount, setItemCount] = useState(1);
  const [error, setError] = useState(null);

  const db = getFirestore();

  const fetchDataFromFirestore = async () => {
    try {
      const productRef = doc(db, category, ref);
      const productSnapshot = await getDoc(productRef);
      if (productSnapshot.exists()) {
        setProduct(productSnapshot.data());
        setIngredientes(productSnapshot.data().ingredientes); // Access ingredientes from productSnapshot.data()
        console.log(productSnapshot.data());
      } else {
        setError("Produto não encontrado");
      }
      setLoading(false);
    } catch (err) {
      console.log("Caiu no ERRO", err);
      setError("Erro na busca por produtos");
      setLoading(false);
    }
  };

  const increaseCount = (e) => {
    e.preventDefault();
    setItemCount(itemCount + 1);
  };

  const decreaseCount = (e) => {
    e.preventDefault();
    if (itemCount === 0) {
      return;
    }
    setItemCount(itemCount - 1);
  };

  const handleAddToCart = () => {
    onItemCountChange(itemCount);
    if (itemCount == 0) {
      alert("Nenhum produto selecionado");
    } else {
      addProductToCart(product, itemCount);
      console.log(product.tipo);
      alert("Produto(s) adicionados ao carrinho!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchDataFromFirestore();
      setLoading(false);
    }, 2000);
  }, [ref]);

  return (
    <div className="flex items-start justify-center w-full h-full px-8 py-8 pt-10 bg-gray-100 sm:px-8 md:px-18 lg:px-32">
      <div>{loading && <Loader />}</div>
      {!loading && product && ( // Check if product is not null
        <div>
          <div className="flex flex-col items-start justify-center w-full gap-8 md:gap-20 md:flex-row">
            <div className="flex items-center justify-center w-full">
              <img
                src={product.imagem}
                alt={product.id}
                className="rounded-lg w-full min-h-[250px] md:min-h-[400px] max-h-[450px] md:max-h-[700px]"
              />
            </div>
            <div className="flex flex-col w-full gap-8">
              <h1 className="text-3xl text-center md:text-start font-bungee">
                {product.tipo}
              </h1>
              <p className="text-lg font-roboto max-w-[520px]">
                {product.descricao}
              </p>
              <p className="flex items-center justify-between text-2xl font-bold md:justify-start md:gap-4 font-roboto">
                <span>Preço: </span>R$:{product.valor}
              </p>
              <p className="text-2xl font-semibold font-roboto">
                Ingredientes:
              </p>
              <ul className="px-5 -mt-5 text-lg capitalize list-disc">
                {ingredientes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <Button
                  title={"Adicionar ao Carrinho"}
                  style={"primary"}
                  border={"rounded-lg"}
                  paddingY="py-5"
                  onClick={handleAddToCart}
                />
                <span className="flex flex-col items-center justify-between px-2 py-2 text-sm font-semibold text-gray-900 select-none font-roboto">
                  <FaChevronLeft
                    className="text-2xl font-bold text-orange-500 rotate-90 cursor-pointer"
                    onClick={increaseCount}
                  />
                  {itemCount}
                  <FaChevronRight
                    className="text-2xl text-orange-500 rotate-90 cursor-pointer"
                    onClick={decreaseCount}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
