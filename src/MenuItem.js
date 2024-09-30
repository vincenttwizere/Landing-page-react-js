import React from 'react';
// import MenuItem from './MenuItem';

function Menu() {
  const menuItems = [
    {
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with seasoned vegetables.',
      price: '$15.99'
    },
    {
      name: 'Steak and Fries',
      description: 'Tender steak served with crispy fries and a side of salad.',
      price: '$22.99'
    },
    {
      name: 'Vegan Salad',
      description: 'Fresh salad with a mix of vegetables, nuts, and avocado.',
      price: '$10.99'
    },
    
    
  ];

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          // <MenuItem key={index} item={item} />
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
