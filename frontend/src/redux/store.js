import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducers.js';
import {getPaintingsReducer, getPaintingDetailsReducer} from './reducers/paintingReducers.js';

const reducer = combineReducers({
    cart: cartReducer,
    getPaintings: getPaintingsReducer,
    getPaintingDetails: getPaintingDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;