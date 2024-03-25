import { combineReducers } from "redux";
import handleCart from './handleCart';


const rootReducers = combineReducers({
    cart: handleCart,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>