import React from 'react';
import breadIcon from './icons/bread.png';
import appleIcon from './icons/apple.png';
// Import other icons as needed

const icons = [
  { name: 'Bread', icon: breadIcon },
  { name: 'Apple', icon: appleIcon },
  // Add other icons as needed
];

const IconSelector = ({ addItem }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {icons.map((item, index) => (
        <div key={index} style={{ margin: '0 10px', cursor: 'pointer' }}>
          <img
            src={item.icon}
            alt={item.name}
            style={{ width: '50px', height: '50px' }}
            onClick={() => addItem({ name: item.name, quantity: 1 })}
          />
        </div>
      ))}
    </div>
  );
};

export default IconSelector;
