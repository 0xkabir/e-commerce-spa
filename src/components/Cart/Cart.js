import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const quantity = cart.reduce((prevItemQuantity, currentItem) => prevItemQuantity+currentItem.quantity, 0)
    const total = cart.reduce((prevItemPrice, currentItem) => prevItemPrice+(currentItem.price*currentItem.quantity), 0)
    const shipping = cart.reduce((prevItemShipping, currentItem) => prevItemShipping+(currentItem.shipping*currentItem.quantity), 0);
    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
            <p className='summary-header'>Order Summary</p>
            <div className="summary">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: $ {total} </p>
                <p>Total Shipping Charge: $ {shipping} </p>
                <p>Tax: $ {tax}</p>
                <p className='grand-total'>Grand Total: $ {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;