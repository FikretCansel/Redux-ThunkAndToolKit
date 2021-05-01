import {combineReducers} from "redux";
//import counterReducer from "./counterReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
    //counterReducer,
    categoryReducer,
    productReducer
});

export default reducer;