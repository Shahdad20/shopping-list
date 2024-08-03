import React from 'react';
import breadIcon from './icons/bread.png';
import appleIcon from './icons/apple.png';
import beansIcon from './icons/beans.png';
import beafIcon from './icons/beef.png';
import chickenIcon from './icons/chicken.png';
import coffeeIcon from './icons/coffee.png';
import eggIcon from './icons/egg.png';
import fishIcon from './icons/fish.png';
import milkIcon from './icons/milk.png';
import peasIcon from './icons/peas.png';
import tunaIcon from './icons/tuna.png';
import waterIcon from './icons/water.png';
import butterIcon from './icons/butter.png';
import cheeseIcon from './icons/cheese.png';
import teaIcon from './icons/tea.png';
// Import other icons as needed

const icons = [
  { name: 'Bread', icon: breadIcon },
  { name: 'Apple', icon: appleIcon },
  { name: 'Beans', icon: beansIcon },
  { name: 'Beaf', icon: beafIcon },
  { name: 'Chicken', icon: chickenIcon },
  { name: 'Coffee', icon: coffeeIcon },
  { name: 'Egg', icon: eggIcon },
  { name: 'Fish', icon: fishIcon },
  { name: 'Milk', icon: milkIcon },
  { name: 'Peas', icon: peasIcon },
  { name: 'Tuna', icon: tunaIcon },
  { name: 'Water', icon: waterIcon },
  { name: 'Butter', icon: butterIcon },
  { name: 'Cheese', icon: cheeseIcon },
  { name: 'Tea', icon: teaIcon },
  // Add other icons as needed
];

const IconSelector = ({ addItem }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
      {icons.map((item, index) => (
        <div key={index} style={{ margin: '10px', cursor: 'pointer' }}>
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
