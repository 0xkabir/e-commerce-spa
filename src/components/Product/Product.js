import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, img, price, ratings, seller} = product
    return (
        <div className='products'>
            <img src={img} alt=""/>
            <div className='product'>
                <div className='name-price'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: ${price}</p>
                </div>
                <div className='rating-and-others'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>
            </div>
            <button className='btn-add-cart' onClick={()=>{handleAddToCart(product)}}>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart} /></span></button>
        </div>
    );
};

export default Product;