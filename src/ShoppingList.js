import React from 'react';

const ShoppingList = ({ items, removeItem }) => {
  return (
    <ul className="shopping-list-container">
      {items.map((item, index) => (
        <li key={index} className="shopping-list-item">
          <button className="remove-item" onClick={() => removeItem(index)}>X</button>
          <span>{item.name} (Quantity: {item.quantity})</span>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
