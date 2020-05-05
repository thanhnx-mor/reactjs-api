import React, { Component } from "react";
import {addProductRequest, getDetailProduct, updateProductRequest} from "../../actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import history from "history"

class ProductActionPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '',
			txtName: '',
			txtPrice: '',
			chkbStatus: false
		}
	}
	componentDidMount() {
		if ( this.props.match ) {
			let { id } = this.props.match.params
			this.props.getDetailProduct(id)
		}
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if ( nextProps && nextProps.productEditting ) {
			let { productEditting } = nextProps
			this.setState({
				id: productEditting.id,
				txtName: productEditting.name,
				txtPrice: productEditting.price,
				chkbStatus: productEditting.status
			})
		}
	}
	
	onChange = async (e) => {
		let target = e.target
		let name = target.name
		let value = target.type === 'checkbox' ? target.checked : target.value
		await this.setState({
			[name]: value
		})
	}
	onHandleSubmit = (e) => {
		let { history } = this.props
		e.preventDefault();
		let { id, txtName, txtPrice, chkbStatus } = this.state
		let product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkbStatus
		}
		if (id) {
			this.props.updateProductRequest(product)
		} else {
			this.props.addProductRequest(product)
		}
		history.push('/product-list')
	}

	render() {
		let { txtName, txtPrice, chkbStatus } =  this.state
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onHandleSubmit}>
					<div className="form-group">
						<label htmlFor="">Tên sản phẩm</label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							onChange={this.onChange}
							value={txtName}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="">Giá</label>
						<input
							type="text"
							className="form-control"
							name="txtPrice"
							onChange={this.onChange}
							value={txtPrice}
						/>
					</div>
					<div className="form-control">
						<label>Trạng thái</label>
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox"
										 name="chkbStatus"
										 onChange={this.onChange}
							       checked={chkbStatus}
							/>
							Còn hàng
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
					<Link to="/product-list" className="btn btn-secondary">Quay lại trang danh sách</Link>
				</form>
			</div>
		)
	}
}
const mapDispatchToProps  = (dispatch, props) => {
	return {
		addProductRequest: (product) => {
			dispatch(addProductRequest(product))
		},
		getDetailProduct: (id) => {
			dispatch(getDetailProduct(id))
		},
		updateProductRequest: (product) => {
			dispatch(updateProductRequest(product))
		}
	}
}
const mapStateToProps = state => {
	return {
		productEditting: state.productEditting
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)