import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function ProductReducer(state=initialState.currentProduct,action){
    switch(action.type){
        case actionTypes.CHANGE_PRODUCT:
            return action.payload;
        default: return state;
    }
}