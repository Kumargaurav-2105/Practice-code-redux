import {createStore} from 'redux'
import CakeReducers from './CakeReducers';

const store=createStore(CakeReducers);
export default store;
