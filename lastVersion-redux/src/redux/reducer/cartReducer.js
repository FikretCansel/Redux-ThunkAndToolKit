import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:


      var addedItem = state.find(
        state => state.product.productId === action.payload.product.productId
      );
      if (addedItem) {
        var newCart = state.map((item) => {
          if (item.product.productId === action.payload.product.productId) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          } else
            return item;
        });
        return newCart;
      } else {

        
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_CART:
      const newCart2=state.filter(item=>item.product.productId!==action.payload.product.productId);
      return newCart2;

    default:
      return state;
  }
}

export default cartReducer;