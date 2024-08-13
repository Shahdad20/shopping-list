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
        style={{
          marginRight: '10px',
          width: '6%', // Set the width to two-thirds of its original size
        }}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        placeholder="Quantity"
        style={{
          marginRight: '10px',
          width: '20%', // Set the width to one-fifth of its original size
          maxWidth: '50px', // Optional: limit the maximum width
        }}
      />
      <button type="submit" style={{ marginRight: '10px' }}>Add Item</button>
    </form>
  );
};

export default AddItemForm;
