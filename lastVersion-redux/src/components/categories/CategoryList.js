import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {
    componentDidMount(){
        this.props.actions.getCategories();
    }
    IsSelectedCategory=(category)=>{
       return category.id === this.props.currentCategory.id ?  true : false
    }
    changeCategory=(category)=>{
        this.props.actions.changeCategory(category);
        this.getProduct(category);
        this.setState({
            allActive:false
        })
    }
    getAllProducts(){
        this.getProduct();
        this.props.actions.changeCategory({});
        this.setState({
            allActive:true
        });
    }
    getProduct(category){
        this.props.actions.getProducts(category);
    }
    state={
        allActive:true
    }

    render() {
        return (
            <div>
                <h3>Categories</h3>
                <ListGroup>
                    <ListGroupItem active={this.state.allActive} onClick={()=>this.getAllProducts()}>
                        Tümü
                    </ListGroupItem>
                    {
                        this.props.categories.map(category=>
                            <ListGroupItem active={this.IsSelectedCategory(category)} key={category.id} onClick={()=>this.changeCategory(category)}>
                                {category.name}
                            </ListGroupItem>
                        )
                    }
                    
                </ListGroup>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        currentCategory:state.categoryReducer ,
        categories:state.categoryListReducer
    };
}
function mapDispathchToProps(dispatch){
    return {
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories,dispatch),
            changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
            getProducts:bindActionCreators(productActions.getProducts,dispatch)
        }
    };
}



export default connect(mapStateToProps,mapDispathchToProps)(CategoryList);
