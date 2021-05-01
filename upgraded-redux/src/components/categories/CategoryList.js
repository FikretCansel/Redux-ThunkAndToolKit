import React, { Component } from 'react'
import { connect } from 'react-redux';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h1>CategoryList</h1>
                <h4>Seçili Kategori : {this.props.category.categoryName}</h4>
            </div>
        )
    }
}

function mapDispatchToProps(state){
    return {category:state.categoryReducer};
}
export default connect(mapDispatchToProps)(CategoryList);
