import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
//Components 
import CartItem from './CartItem.js';
//CSS
import './Cart.css';
//Actions
import {addToCart, deleteFromCart} from '../redux/actions/cartAction.js';


function Cart(props) {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const deleteFromCartHandler = (id) => {
        dispatch(deleteFromCart(id));

    };

    // const getCartCount = () => {
    //     return cartItems.reduce((item) => )
    // }

    // const getCartSubtotal = () => {
    //     return cartItems.reduce((price, item) => (item.price * item.qty + price, 0))
    // }

    // useEffect(() => {}, [])
    return (
        <div className = 'cart'>
            
            <div className = 'cartLeftPannel'>
                <h2 className = 'cartTitle'>Shopping Cart</h2>
                
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart is Empty <Link to = '/'>Back to Gallery</Link>
                    </div>
                ): cartItems.map(item => (
                    <CartItem item = {item} deleteFromCartHandler = {deleteFromCartHandler} />
                ))}

            </div>
           
            <div className = 'cartRightPannel'>
                <div className = 'cartItemInfo'>
                    <p>Subtotal (getCartCount) items</p>
                    {/* <p>${getCartSubtotal().toFixed(2)}</p> */}
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