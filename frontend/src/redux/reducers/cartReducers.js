import * as actionTypes from '../constants/cartConstats.js';

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const paintingExists = state.cartItems.find((i) => i.painting === item.painting)

            if(paintingExists){
               return {
                ...state,
                cartItems: state.cartItems.map((i) => i.painting === paintingExists.painting ? item: i)
            }
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, item], 
            }
        }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.painting !== action.payload)
            };

        default:
            return state;
    }

};