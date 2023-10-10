import "./App.css"
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <button><Link to="/shop">Shop</Link></button>
        <button><Link to="/cart">Cart</Link></button>
      </header>
      <img className='homepageImage' src='src/pictures/pexels-shahidrafique-awan-744479.jpg'/>
      <h1>Limited Drop of our Ceremonial Matcha Powder</h1>
      <p>Zen energy, endless ways to enjoy</p>
      <button><Link to="/shop">Shop</Link></button>
    </div>
  );
};

export default App;