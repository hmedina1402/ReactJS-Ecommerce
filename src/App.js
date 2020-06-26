import React, { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import Products from './components/Products'
import {urlApiProducts} from './utils/constants';
import {STORAGE_PRODUCTS_CART} from './utils/constants';

function App() {

  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  },[]);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    if(idsProducts) {
      const idsProductsSplit = idsProducts.split(',');
      setProductsCart(idsProductsSplit);
    }else{
      setProductsCart([]);
    }
  }

  const addProductCar = (id, name) =>{
    //console.log(`Has añadido el producto ${name} con el ID: ${id} al carrito.`);

    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div className="App">
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products}/>
      <Products products={products} addProductCar={addProductCar}/>
      <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App