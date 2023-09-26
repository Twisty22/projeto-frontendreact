import Filters from './Components/Filters/Filters.js';
import Home from './Components/ProductList/Home/Home.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import { listaProdutos } from './Assets/ProductList.js';
import './App.css';

function App() {
  return (
    <div className="Main">
        <Filters/>
        <Home listaProdutos={listaProdutos}/>
        <Cart/>
    </div>
  );
}

export default App;
