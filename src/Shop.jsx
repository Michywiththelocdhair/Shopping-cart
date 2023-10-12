import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = ({ addItem }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const shoppingCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };
  
  const items = [
    {id:1, name: 'Product 1', description: 'Description of product 1', price: 10, imageURL: 'src/coffee1.jpg'},
    {id:2, name: 'Product 2', description: 'Description of product 2', price: 20, imageURL:'src/matcha3.jpg'},
    {id:3, name: 'Product 3', description: 'Description of product 3', price: 20, imageURL: 'src/coffee2.jpg'},
    {id:4, name: 'Product 4', description: 'Description of product 4', price: 30, imageURL: 'src/coffee3.jpg'},
  ];

  const allTheItems = cart.length;
  
  const removeItem = (index) => {
  const removedItem = cart[index];
  const newCart = [...cart];
  newCart.splice(index, 1);
  setCart(newCart);
  setTotal(total - removedItem.price);
};

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <div>
      <header>
        <h2>CoffeeRoasters</h2>
        <div>
          <button><Link to="/">Home</Link></button>
          <button onClick={toggleCart}>Cart({allTheItems})</button>
        </div>
      </header>
      <div className='shopContent'>
        <div className='allProducts'>
        {items.map((item) => (
          <div key={item.id} className='product'>
            <h2>{item.name}</h2>
            <img src= {item.imageURL}/>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => shoppingCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
      {isCartOpen && (
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <ul>
        {cart.map((item, index) => (
            <li key={index}>
            {item.name} - ${item.price} 
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>

        ))}
        </ul>
        <h3>Total: ${total}</h3>
        <button>Check Out</button>
      </div>
      )}
    </div>
  );
};

export default Shop;