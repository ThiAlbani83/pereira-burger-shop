import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { data } from "../../constants";

const ItemList = ({ onItemCountChange }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsPromisse = new Promise((resolve) => {
          setTimeout(() => {
            resolve(data.cardData);
          }, 2000);
        });
        const productData = await productsPromisse;
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError("Erro na busca por produtos");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 px-8 py-8 pt-10 bg-gray-100 sm:px-8 md:px-18 lg:px-32">
      <h1 className="text-2xl font-bungee ">Escolha seu Hamburger</h1>
      <div>{loading && <p className="text-xl font-roboto">Carregando produtos...</p>}</div>
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="flex flex-wrap items-center justify-center w-full gap-20 mx-auto xl:justify-start">
          {product.map((product, index) => (
              <div key={index}>
                <ItemCard
                  title={product.title}
                  img={product.image}
                  onItemCountChange={onItemCountChange}
                />
              </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ItemList;
