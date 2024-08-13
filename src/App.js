import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';
import IconSelector from './IconSelector';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('shopping-list')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('shopping-list', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const itemNameLower = item.name.toLowerCase();
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.name.toLowerCase() === itemNameLower);
      if (existingItem) {
        return prevItems.map(i =>
          i.name.toLowerCase() === itemNameLower ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevItems, { ...item, name: itemNameLower }];
      }
    });
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <AddItemForm addItem={addItem} />
      <ShoppingList items={items} removeItem={removeItem} />
      <button onClick={resetItems} className="reset-button">Reset List</button>
      <IconSelector addItem={addItem} />
    </div>
  );
};

export default App;
