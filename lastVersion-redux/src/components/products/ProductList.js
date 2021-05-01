import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
//import productListReducer from "../../redux/reducer/productListReducer";
import {Table,Button} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

class ProductList extends Component {
    componentDidMount(){
        this.props.actions.getProducts();
    }
    addToCart=(product)=>{
        this.props.actions.addToCart({product,quantity:1});
    }


  render() {
    return (
      <div>
        <h3>
          Products{" "}
          <Badge color="success">{this.props.currentCategory.name}</Badge>{""}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>UnitsInStock</th>
              <th>UnitPrice</th>
              <th>Cart To Add</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productList.map((product) => (
              <tr key={product.productId}>
                <th scope="row">{product.productId}</th>
                <td>{product.productName}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice}</td>
                <td><Button color="success" onClick={()=>this.addToCart(product)}>add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.categoryReducer,
    productList: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            getProducts:bindActionCreators(productActions.getProducts,dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
