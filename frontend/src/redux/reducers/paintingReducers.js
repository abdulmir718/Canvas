import * as actionTypes from '../constants/paintingConstants.js';

export const getPaintingsReducer = (state = {paintings: []}, action) => {
    
    switch(action.type){
        case actionTypes.GET_PAINTINGS:
           return {
               loading: true,
               paintings: []
           };
            case actionTypes.GET_PAINTINGS_SUCCESSFUL:
               return {
                paintings: action.payload,   
                loading: false
               };
               case actionTypes.GET_PAINTINGS_FAILED:
                   return {
                       loading: false,
                       err: action.payload
                   };
                   default:
                       return state
    };
};

export const getPaintingDetailsReducer = (state = {painting: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_PAINTING_DETAILS:
            return {
                loading: true
            };
            case actionTypes.GET_PAINTING_DETAILS_SUCCESSFUL:
                return{
                    loading: false,
                    painting: action.payload
                };
                case actionTypes.GET_PAINTING_DETAILS_FAILED:
                    return {
                        loading: false,
                        err: action.payload
                    };
                   
                        default:
                            return state;
    };
};