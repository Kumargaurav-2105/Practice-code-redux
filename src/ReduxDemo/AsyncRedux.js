const redux= require('redux') 
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')
const createStore= redux.createStore
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"
const initialState = {
    loading: false,
    data: [],
    error: ''
}

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.error
            }
        default: state
    }
}
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map((user)=>user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const store=createStore(Reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())