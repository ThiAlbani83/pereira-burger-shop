import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ItemCard from "../components/hero/ItemCard";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useProductIds } from "../constants/productContext";

const ItemList = ({ onItemCountChange }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const { setProductIds } = useProductIds();

  const db = getFirestore();

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bebidas"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push({ id: doc.id, ...doc.data(), category: "bebidas" }); // Include the document ID in the data
        setProductIds(doc.id);
      });
      setProduct(tempArr);
    } catch (err) {
      console.log("Caiu no ERRO");
    }
  };

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchDataFromFirestore();
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("Erro na busca por produtos");
      setLoading(false);
    }
  }, []);


  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 px-8 py-8 pt-10 bg-gray-100 sm:px-8 md:px-18 lg:px-32">
      <div>{loading && <Loader />}</div>
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h1 className="text-2xl font-bungee">O que você quer comer hoje?</h1>
          <div className="flex flex-wrap  justify-center w-full gap-20 mx-auto xl:justify-start">
            {product.map((product, index) => (
              <div key={index}>
                <ItemCard
                  title={product.tipo}
                  img={product.imagem}
                  onItemCountChange={onItemCountChange}
                  link={`/product-detail/${product.category}/${product.id}`}
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
