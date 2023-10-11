import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeItemFromCart }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(cart);
    console.log(cart);
    setTotal(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };
  
  const removeItem = (index) => {
    const removedItem = items[index];
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setTotal(total - removedItem.price);
  };

  

  return (
    <div>
      <header>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/shop">Shop</Link></button>
      </header>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
      ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;

