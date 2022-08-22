const redux=require('redux')
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')
const applyMiddleware=redux.applyMiddleware
const createStore=redux.createStore
const initialState={
    loading: false,
    users: [],
    error: ''
}
const FETCH_USER_REQUEST= 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE= 'FETCH_USER_FAILURE'
const fetchUserRequest=()=>{
    return {
        type: FETCH_USER_REQUEST,
    }
}
const fetchUserSuccess=(users)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure=(err)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload: err
    }
}
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS: {
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case FETCH_USER_FAILURE:{
            return{
                loading: false,
                users: [],
                error: action.payload
            }
        }
    }
}
const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const users= res.data.map((users)=>users.id)
            dispatch(fetchUserSuccess(users))
        })
        
        .catch((error)=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const store= createStore(reducer, applyMiddleware(thunkMiddleware))
const unsubscribe= store.subscribe(()=>console.log('updated data', store.getState()))
store.dispatch(fetchUsers())