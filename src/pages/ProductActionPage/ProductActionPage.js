import React, { Component } from "react";
import { addProductRequest, getDetailProduct } from "../../actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

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
		let { id } = this.props.match.params
		if ( id ) {
			this.props.getDetailProduct(id)
				.then((res) => {
					console.log(res)
				})
		}
	}

	onChange = (e) => {
		let target = e.target
		let name = target.name
		let value = target.type === 'checkbox' ? target.checked : target.value
		this.setState({
			[name]: value
		})
	}
	onHandleSubmit = (e) => {
		let { history } = this.props
		e.preventDefault();
		let { id, txtName, txtPrice, chkbStatus } = this.state
		let product = {
			id: '',
			name: txtName,
			price: txtPrice,
			status: chkbStatus
		}
		this.props.addProductRequest(product)
		history.goBack();
	}

	render() {
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
						/>
					</div>
					<div className="form-group">
						<label htmlFor="">Giá</label>
						<input
							type="text"
							className="form-control"
							name="txtPrice"
							onChange={this.onChange}
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
		}
	}
}
export default connect(null, mapDispatchToProps)(ProductActionPage)