import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function ProductDetail({ onItemCountChange }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [itemCount, setItemCount] = useState(1);

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
      alert("Produto(s) adicionados ao carrinho!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProduct();
      setLoading(false);
    }, 2000);
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(`http://localhost:3001/hamburgers?id=${id}`);
    const product = await response.json();
    setProduct(product);
  };

  return (
    <div className="flex items-start justify-center w-full h-full px-8 py-8 pt-10 bg-gray-100 sm:px-8 md:px-18 lg:px-32">
      <div>
        {loading && (
          <p className="text-xl font-roboto">Carregando informações...</p>
        )}
      </div>
      {!loading && (
        <div>
          {product.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center w-full gap-8 md:gap-20 md:flex-row"
            >
              <div className="flex items-center justify-center w-full">
                <img
                  src={item.imagem}
                  alt={item.id}
                  className="rounded-lg w-full min-h-[250px] md:min-h-[400px] max-h-[450px] md:max-h-[700px]"
                />
              </div>
              <div className="flex flex-col w-full gap-8">
                <h1 className="text-3xl text-center md:text-start font-bungee">
                  {item.tipo}
                </h1>
                <p className="text-lg font-roboto max-w-[520px]">
                  {item.descrição}
                </p>
                <p className="flex items-center justify-between text-2xl font-bold md:justify-start md:gap-4 font-roboto">
                  <span>Preço: </span>R$:{item.valor}
                </p>
                <p className="text-2xl font-semibold font-roboto">
                  Ingredientes:
                </p>
                <ul className="px-5 -mt-5 text-lg capitalize list-disc">
                  {item.ingredientes.map((item, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
