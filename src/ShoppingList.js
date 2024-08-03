import React from 'react';

const ShoppingList = ({ items, removeItem }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {items.map((item, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <button onClick={() => removeItem(index)} style={{ marginRight: '10px' }}>X</button>
          {item.name} (x{item.quantity})
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
