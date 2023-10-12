import "./App.css"
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h2>CoffeeRoasters</h2>
        <div>
          <button><Link to="/shop">Shop</Link></button>
        </div>
      </header>
      <div className='homeContent'>
        <div>
          <h1>Limited Drop of our Ceremonial Matcha Powder</h1>
          <p>Zen energy, endless ways to enjoy</p>
          <button><Link to="/shop">Shop</Link></button>
        </div>
        <img className='homepageImage' src='src/matcha.jpg'/>
      </div>
      
    </div>
  );
};

export default App;