import React, { useState } from 'react';
import Navbar from './components/header/Navbar';
import ItemList from './components/hero/ItemList';

function App() {
  const [itemCount, setItemCount] = useState(0);

  const handleItemCountChange = (newCount) => {
    setItemCount(newCount);
  };

  return (
    <main>
      <Navbar itemCount={itemCount} />
      <ItemList onItemCountChange={handleItemCountChange} />
    </main>
  );
}

export default App;