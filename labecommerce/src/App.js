import Filters from './Components/Filters/Filters.js';
import Home from './Components/ProductList/Home/Home.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import { listaProdutos } from './Assets/ProductList.js';
import { useState } from "react";
import logo from './Assets/satellite-1-logo-png-transparent.png'
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [cart, setCart] = useState([]);
    const [minFilter, setMinFilter] = useState(0);
    const [maxFilter, setMaxFilter] = useState(0);
    const [searchFilter, setSearchFilter] = useState('');
    const [listaRender, setListaRender] = useState(listaProdutos);
    
    const filtrarPorMin = (valorFiltro) => {
        const produtosFiltrados = listaProdutos.filter((item) => {
            return item.value >= valorFiltro;
        });
       return produtosFiltrados;
    }
    const filtrarPorMax = (valorFiltro) => {
        const produtosFiltrados = listaProdutos.filter((item) => {
            return item.value <= valorFiltro;
        });
        return produtosFiltrados;
    }
    const filtrarPorNome = (valorFiltro) => {
        const produtosFiltrados = listaProdutos.filter((item) => {
            return item.name.includes(valorFiltro);
        });
        return produtosFiltrados;
    }

    const removeProduct = (produto) => {
        let copiaCart = [...cart];
        let posicaoProduto = 0;
        let valorProduto = amount;
        for (let i = 0; i < copiaCart.length; i++) {
            if(produto.id === copiaCart[i].id){
                posicaoProduto = i;
            }
        }
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
        console.log(valorProduto)
    }
    return (
    <div>
        <header className='Header'>
            <img className='Logo' src={logo}/>
        </header>
        <div className="Main">
            <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter}
            setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter} 
            filtrarPorMin={filtrarPorMin} filtrarPorMax={filtrarPorMax} filtrarPorNome={filtrarPorNome}
            setListaRender={setListaRender}/>
            <Home listaProdutos={listaRender} amount={amount} setAmount={setAmount} cart={cart} setcart={setCart} 
            addProduct={addProduct}/>
            <Cart amount={amount} setAmount={setAmount} cart={cart} setcart={setCart} removeProduct={removeProduct}/>
        </div>
    </div>
  );
}

export default App;
