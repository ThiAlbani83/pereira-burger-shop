import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ onItemCountChange }) => {
  return (
    <div className="flex items-center justify-between w-full px-8 py-8 sm:px-8 md:px-18 lg:px-32">
      <div>
        <ItemCard onItemCountChange={onItemCountChange} />
      </div>
    </div>
  );
};

export default ItemList;