import {combineReducers} from "redux";
//import counterReducer from "./counterReducer";
import categoryReducer from "./changeCategoryReducer";
//import productReducer from "./changeProductReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
const reducer = combineReducers({
    //counterReducer,
    categoryReducer,
    //productReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
});

export default reducer;