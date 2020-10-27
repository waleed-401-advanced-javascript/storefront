import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
// import reducers
import products from './products';
import categories from './categories';
import cart from './cart';

let reducers = combineReducers({ products, categories ,cart});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};
export default store();

