import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";

const ItemList = ({ onItemCountChange, isHome }) => {
  const { id } = isHome ? "Hamburguers" : useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchData();
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("Erro na busca por produtos");
      setLoading(false);
    }
  }, [id]);

  const fetchData = async () => {
    if (isHome) {
      const response = await fetch(
        "https://api.npoint.io/4104add4daf5e621ecf7/hamburgers"
      );
      const jsonData = await response.json();
      setProduct(jsonData);
      return;
    }
    const response = await fetch(
      `https://api.npoint.io/4104add4daf5e621ecf7/${id}`
    );
    const jsonData = await response.json();
    setProduct(jsonData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 px-8 py-8 pt-10 bg-gray-100 sm:px-8 md:px-18 lg:px-32">
      <div>{loading && <Loader />}</div>
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h1 className="text-2xl font-bungee">Escolha seu Hamburger</h1>
          <div className="flex flex-wrap  justify-center w-full gap-20 mx-auto xl:justify-start">
            {product.map((product, index) => (
              <div key={index}>
                <ItemCard
                  title={product.tipo}
                  img={product.imagem}
                  onItemCountChange={onItemCountChange}
                  link={`/product-detail/${product.id}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default ItemList;
