const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };
  
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setTotal(total - items[index].price);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
      ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;

