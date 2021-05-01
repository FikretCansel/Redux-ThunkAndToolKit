import * as actionTypes from "./actionTypes"

export function ChangeProduct(carItem){
    return {type:actionTypes.CHANGE_PRODUCT,payload:carItem};
}


export function getProductSuccess(carItem){
    return {type:actionTypes.GET_PRODUCT_SUCEESS,payload:carItem};
}

export function getProducts(category){
    return function(dispatch){
        let url="http://localhost:3000/products";
        if(category){
            url=url+"?categoryId="+category.id;
        }

        
        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getProductSuccess(result)));
    }
}