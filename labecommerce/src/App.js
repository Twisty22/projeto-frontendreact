import Filters from './Components/Filters/Filters.js';
import Home from './Components/ProductList/Home/Home.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import Items from './Components/ShoppingCart/Items/Items.js';
import './App.css';

function App() {
  return (
    <div>
        <Home/>
        <Filters/>
        <Cart/>
        <Items/>
    </div>
  );
}

export default App;
