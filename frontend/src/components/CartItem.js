import React from 'react';
import {Link} from 'react-router-dom';
//CSS
import './CartItem.css';


function CartItem({item, deleteFromCartHandler}) {
    return (
        <div className = 'cartItem'>
            {<div className = 'cartItemImg'>
                <img src = {item.imageUrl} alt = {item.name} />
            </div>}

            {<Link to = {`/paintings/${item.painting}`} className = 'cartItemName'>
                <p>{item.name}</p>
            </Link>}
                 
            <p className = 'cartItemPrice'>${item.price}</p>

            <button className = 'removeCartItem'
            onClick = {() => deleteFromCartHandler(item.painting)}>
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default CartItem;