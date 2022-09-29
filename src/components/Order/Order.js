import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart = getStoredCart()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                setCart(savedCart)
            }
        }
    },[products])
    const [cart, setCart] = useState([])
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity += 1
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='order'>
            <div className="products-container">
                {
                    products.map(product => {
                        return (
                            <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>
                        )
                    })
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;