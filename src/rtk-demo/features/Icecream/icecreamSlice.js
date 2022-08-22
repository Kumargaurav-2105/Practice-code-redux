import {createSlice} from ('@reduxjs/toolkit')
const icecreamInitialState = {
    numberOfIcecream: 20
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: icecreamInitialState,
    reducers: {
        icecreamorder: (state) => {
            state.numberOfIcecream--
        },
        icecreamrestocked: (state, action) => {
            state.numberOfIcecream += action.payload
        },
    },
})
module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions