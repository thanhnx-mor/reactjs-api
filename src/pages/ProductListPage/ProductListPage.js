import React, { Component } from "react";
import Products from "../../components/Products/Products";
import ProductItem from "../../components/Products/ProductItem";
import { connect } from "react-redux"
import { fetchProductRequest, deleteProductRequest } from "../../actions";
import { Link } from "react-router-dom";

class ProductListPage extends Component {
	componentDidMount() {
		this.props.fetchProductRequest()
	}
	onDeleteProduct = (id) => {
		this.props.deleteProductRequest(id)
	}

	onEditProduct = (id) => {
		this.props.deleteProductRequest(id)
	}

	showListProduct = (products) => {
		let result = null
			if ( products.length > 0 ) {
				result = products.map((product, index) => {
					return (
						<ProductItem
							key={index}
							product={product}
							index={index}
							onDeleteProduct={this.onDeleteProduct}
							onEditProduct={this.onEditProduct}
						/>
					)
				})
			}
		return result
	}
	render() {
		let { products } = this.props
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/products/add" className="btn btn-primary">Add product</Link>
				<Products>
					{this.showListProduct(products)}
				</Products>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchProductRequest: () => {
			dispatch(fetchProductRequest())
		},
		deleteProductRequest: (id) => {
			dispatch(deleteProductRequest(id))
		}
	}
}
const mapStateToProps = state => {
	return {
		products: state.Products
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)