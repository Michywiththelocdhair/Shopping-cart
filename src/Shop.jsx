import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = ({ addItem }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const shoppingCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };
  
  const items = [
    {id:1, name: 'Product 1', description: 'Description of product 1', price: 10},
    {id:2, name: 'Product 2', description: 'Description of product 2', price: 20},
    {id:3, name: 'Product 3', description: 'Description of product 3', price: 20},
    {id:4, name: 'Product 4', description: 'Description of product 4', price: 30},
  ];

  useEffect(() => {
  console.log("Cart:", cart);
  console.log("Total:", total);
}, [cart, total]);

  
  return (
    <div>
      <header>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/cart">Cart</Link></button>
      </header>
      <h1>Shop</h1>
      <div className='allProducts'>
        {items.map((item) => (
          <div key={item.id} className='product'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => shoppingCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;