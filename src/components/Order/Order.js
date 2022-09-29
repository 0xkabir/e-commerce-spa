import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                <h2>Products Selected: {cart.length}</h2>
            </div>
        </div>
    );
};

export default Order;