import * as actionTypes from '../constants/cartConstats';
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`/paintings/${id}`);
 

dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
        painting: data._id,
        name: data.name,
        year: data.year,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl,
        sold: data.sold

        

    }
});
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

};

export const deleteFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};