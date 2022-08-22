const redux= require('redux')
const applyMiddleware= redux.applyMiddleware
const reduxlogger= require('redux-logger')
const createStore= redux.createStore
const ORDER_CAKE= 'ORDER_CAKE'
const RE_STOCK='RE_STOCK'
const logger= reduxlogger.createLogger()
const previousState={
    numberOfCakes: 10
}
const orderCake=()=>{
    return {
        type: ORDER_CAKE,
        payload: 1
    }
}
const reStock=(q)=>{
    return {
        type: RE_STOCK,
        payload: q
    }
}
const cakeReducer=( state= previousState, action)=>{
    switch(action.type){
        case ORDER_CAKE: {
            return{
            ...state,
            numberOfCakes: state.numberOfCakes-1
        }
    }
    case RE_STOCK:{
        return {
            ...state,
            numberOfCakes: state.numberOfCakes+action.payload,
        }
    }
        default: return state
    }
}
const store= createStore(cakeReducer, applyMiddleware(logger))
console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(reStock(3))
unsubscribe()