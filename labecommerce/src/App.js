import Filters from './Components/Filters/Filters.js';
import Home from './Components/ProductList/Home/Home.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import { listaProdutos } from './Assets/ProductList.js';
import { useState } from "react";
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState(0);
    const [minFilter, setMinFilter] = useState(0);
    const [maxFilter, setMaxFilter] = useState(0);
    const [searchFilter, setSearchFilter] = useState(0);

    return (
    <div className="Main">
        <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter}
         setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
        <Home listaProdutos={listaProdutos} amount={amount} setAmount={setAmount} cart={cart} setcart={setCart}/>
        <Cart amount={amount} setAmount={setAmount} cart={cart} setcart={setCart}/>
    </div>
  );
}

export default App;
