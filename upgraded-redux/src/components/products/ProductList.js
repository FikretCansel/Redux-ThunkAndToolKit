import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h1>ProductList</h1>
                <h4>Ödenecek Ürün : {this.props.product.productName}</h4>
            </div>
        )
    }
}

function mapDispatchToProps(state){
    return {product:state.productReducer};
}


export default connect(mapDispatchToProps)(ProductList);