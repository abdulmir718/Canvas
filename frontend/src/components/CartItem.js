import React from 'react';
import './CartItem.css';
import {Link} from 'react-router-dom';

function CartItem(props) {
    return (
        <div className = 'cartItem'>
            <div className = 'cartItemImg'>
                <img src = 'https://i.imgur.com/EtKwcbw.png' alt = 'CartImage' />
            </div>

            <Link to = {`/paintings/${1}`} className = 'cartItemName'>
                <p>Painting 1</p>
                 </Link>
            <p className = 'cartItemPrice'>$1500.00</p>

            <button className = 'removeCartItem'></button>
            <i class="fas fa-trash-alt"></i>
        </div>
    );
}

export default CartItem;