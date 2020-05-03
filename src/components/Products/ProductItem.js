import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component{
	onDelete = (id) => {
		// eslint-disable-next-line no-restricted-globals
		if ( confirm('Bạn có chắc chắn muỗn xoá sản phẩm này?') ) {
			this.props.onDeleteProduct(id)
		}
	}
	onEdit = id => {
		this.props.onEditProduct(id)
	}

	render() {
		let { product, index } = this.props
		let statusClass = product.status ? 'success' : 'danger'
		let statusLabel = product.status ? 'Còn hàng' : 'Hết hàng'
		return (
			<tr>
				<td>{index+1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`label label-${statusClass}`}>{ statusLabel }</span>
				</td>
				<td>
					<Link to={`/products/${product.id}/edit`} className="btn btn-primary mr-10">Sửa</Link>
					<button type="button" className="btn btn-danger" onClick={ () => this.onDelete(product.id) }>Xóa</button>
				</td>
			</tr>
		)
	}
}
export default ProductItem