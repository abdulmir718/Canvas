import React from 'react';
import './Cart.css';
import CartItem from './CartItem.js';
import {Link} from 'react-router-dom';


function Cart(props) {
    return (
        <div className = 'cart'>
            
            <div className = 'cartLeftPannel'>
                <h2 className = 'cartTitle'>Shopping Cart</h2>
                
                <CartItem />

            </div>
           
            <div className = 'cartRightPannel'>
                <div className = 'cartItemInfo'>
                    <p>Subtotal (0) items</p>
                    <p>$1500.00</p>
                </div>
                <div>
                    <Link to = '/checkout' className = 'checkoutLink'>
                        <button className = 'checkoutButton'>Proceed to Checkout</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Cart;