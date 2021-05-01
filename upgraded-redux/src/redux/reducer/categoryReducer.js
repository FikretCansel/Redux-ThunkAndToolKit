import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function categoryReducer(state=initialState.currentCategory,action){
    switch(action.type){
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}
export default categoryReducer;