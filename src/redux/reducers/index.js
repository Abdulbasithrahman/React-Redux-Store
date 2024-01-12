import { combineReducers } from "redux";
import { productReducer, selectedReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedReducer,
})

export default reducers;