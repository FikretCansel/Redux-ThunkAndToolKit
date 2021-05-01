import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

class CartDetails extends Component {
  removeFromCart(cartItem) {
    this.props.actions.cartItemRemove(cartItem);
  }

  render() {
    return (
      <div>
        <h2> Cart Details</h2>

        <Table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Delete</td>
            </tr>
          </thead>
          {this.props.cart.map((cartItem) => (
            <tr>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button onClick={() => this.removeFromCart(cartItem)}>Remove</Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return { cart: state.cartReducer };
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            cartItemRemove:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetails);
