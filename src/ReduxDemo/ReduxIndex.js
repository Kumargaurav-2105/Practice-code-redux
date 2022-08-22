const redux= require('redux')
const reduxlogger= require('redux-logger')
const createStore= redux.createStore
const applyMiddleware= redux.applyMiddleware
const combineReducers= redux.combineReducers
const logger= reduxlogger.createLogger();
const BUY_CAKE= "BUY_CAKE"; //1 Action Constant
const BUY_ICECREAM= "BUY_ICECREAM"

function buyCake(){  //2. Action Creator
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}
function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

const cakeInitialState={
    numberOfCakes: 10,
}
const icecreamInitialState={
    numberOfIcecreams: 20
}
const cakeReducer=(state=cakeInitialState, action)=>{
    switch(action.type){
        case BUY_CAKE: {
            return {
                ...state,
                numberOfCakes: state.numberOfCakes-1,
            }
        };
        default: return state
    }
}

const icecreamReducer=(state=icecreamInitialState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: {
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams-1,
            }
        };
        default: return state
    }
}

const rootReducer=combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log("Initial State", store.getState())
const unsubscribe= store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();
