import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
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
