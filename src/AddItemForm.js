import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addItem({ name: name.trim(), quantity });
      setName('');
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '10px' }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        placeholder="Quantity"
        style={{ marginRight: '10px' }}
      />
      <button type="submit" style={{ marginRight: '10px' }}>Add Item</button>
    </form>
  );
};

export default AddItemForm;
