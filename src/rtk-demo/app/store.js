import {configureStore} from ('@reduxjs/toolkit')
import {cakeReducer} from ('../features/Cake/cakeSlice')
import {icecreamReducer} from ('../features/Icecream/icecreamSlice')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
})
module.exports = store