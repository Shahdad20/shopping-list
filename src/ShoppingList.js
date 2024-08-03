import React from 'react';

const ShoppingList = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <button className="remove-item" onClick={() => removeItem(index)}>X</button>
          <span>{item.name} (Quantity: {item.quantity})</span>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
