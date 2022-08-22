import {createSlice} from ('@reduxjs/toolkit')
const initialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'Cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
})
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
