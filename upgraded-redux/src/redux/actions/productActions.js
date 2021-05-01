import * as actionTypes from "./actionTypes"

export function ChangeProduct(product){
    return {type:actionTypes.CHANGE_PRODUCT,payload:product};
}