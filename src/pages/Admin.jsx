import { addDoc, getFirestore, collection } from "firebase/firestore";
import React, { useState } from "react";

const AddProducts = () => {
  const [collectionName, setCollectionName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productIngredients, setProductIngredients] = useState([]);
  const [productImageUrl, setProductImageUrl] = useState("");

  const db = getFirestore();

  const handleSubmit = async () => {
    console.log(collectionName)
    if (collectionName.trim() === "") {
      console.error("Collection name is empty.");
      return;
    }
    const docRef = await addDoc(collection(db, collectionName), {
      tipo: productName,
      valor: productPrice,
      descricao: productDescription,
      ingredientes: productIngredients,
      imagem: productImageUrl,
    });
    console.log(productName);
    console.log("Document written with ID: ", docRef.id);
    alert("Produto: " + productName + " inserido com sucesso!")
  };

  const handleIngredients = (e) => {
    // Divida a string pelo delimitador para obter um array
    const productIngredients = e.target.value.split(',');
    setProductIngredients(productIngredients);
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      <h1 className="font-Poppins font-semibold text-heading-4">
        Adicionar Produtos
      </h1>
      <div className="flex flex-col gap-5 w-[350px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label htmlFor="category">Select a Category:</label>
          <select
            name="categories"
            id="category"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            className="border-2 rounded-md outline-none w-52"
          >
            <option disabled value="">Select a Category</option>
            <option value="hamburger">Hamburgers</option>
            <option value="porcoes">Porções</option>
            <option value="bebidas">Bebidas</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label>Product Name:</label>
          <input
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            className="border-2 rounded-md outline-none  w-52"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label>Product Description:</label>
          <input
            type="text"
            onChange={(e) => setProductDescription(e.target.value)}
            className="border-2 rounded-md outline-none  w-52"
          />
          
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label>Product Ingredients:</label>
          <input
            type="text"
            onChange={handleIngredients}
            className="border-2 rounded-md outline-none  w-52"
            placeholder="Separated by commas ( , )"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label>Product Price:</label>
          <input
            type="number"
            onChange={(e) => setProductPrice(e.target.value)}
            className="border-2 rounded-md outline-none  w-52"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label>Product Image Url:</label>
          <input
            type="text"
            onChange={(e) => setProductImageUrl(e.target.value)}
            className="border-2 rounded-md outline-none  w-52"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary text-white font-Inter rounded-md py-2 active:scale-90 duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProducts;