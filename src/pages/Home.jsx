import React, { useState } from "react";
import ItemList from "../components/hero/ItemList";

const Home = ({onItemCountChange}) => {

  return (
    <div>
      <ItemList onItemCountChange={onItemCountChange} />
    </div>
  );
};

export default Home;
