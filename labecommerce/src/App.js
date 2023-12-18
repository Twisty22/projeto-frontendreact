import Filters from './Components/Filters/Filters.js';
import Home from './Components/ProductList/Home/Home.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import { listaProdutos } from './Assets/ProductList.js';
import { useState } from "react";
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    const [minFilter, setMinFilter] = useState(0);
    const [maxFilter, setMaxFilter] = useState(0);
    const [searchFilter, setSearchFilter] = useState(0);
    const removeProduct = (produto) => {
        let copiaCart = [...cart];
        let posicaoProduto = 0;
        let valorProduto = amount;
        for (let i = 0; i < copiaCart.length; i++) {
            if(produto.id === copiaCart[i].id){
                posicaoProduto = i;
            }
        }
        console.log(posicaoProduto)
        if(produto.quantity > 1){
            copiaCart[posicaoProduto].quantity -= 1;
            valorProduto -= produto.value;
            setCart(copiaCart)
            setAmount(valorProduto)
        }
        else if(produto.quantity = 1){
            copiaCart.splice(posicaoProduto, 1)
            valorProduto -= produto.value;
            setCart(copiaCart)
            setAmount(valorProduto)
        }
    }
    const addProduct = (novoProduto) => {
        let copiaCart = [...cart];
        let repetido = false;
        let posicaoProduto = 0;
        let valorProduto = amount;
        for(let i = 0; i < copiaCart.length; i++){
            if(novoProduto.id === copiaCart[i].id){
                repetido = true;
                posicaoProduto = i;
            }
        }
        if(repetido === false){
            copiaCart.push(novoProduto)
            valorProduto += novoProduto.value;
            setCart(copiaCart)
            setAmount(valorProduto)
        }
        else if(repetido === true){
            copiaCart[posicaoProduto].quantity += 1;
            valorProduto += novoProduto.value;
            setCart(copiaCart)
            setAmount(valorProduto)
        }
    }
    return (
    <div className="Main">
        <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter}
         setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
        <Home listaProdutos={listaProdutos} amount={amount} setAmount={setAmount} cart={cart} setcart={setCart} 
        addProduct={addProduct}/>
        <Cart amount={amount} setAmount={setAmount} cart={cart} setcart={setCart} removeProduct={removeProduct}/>
    </div>
  );
}

export default App;
