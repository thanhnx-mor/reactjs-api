import React, { Component } from "react";

class ProductItem extends Component{
	render() {
		return (
			<tr>
				<td>1</td>
				<td>1</td>
				<td>Thanhdz</td>
				<td>Thanhdz</td>
				<td>
					<span className="label label-success">Con hang</span>
				</td>
				<td>
					<button type="button" className="btn btn-primary mr-10">Sửa</button>
					<button type="button" className="btn btn-danger">Xóa</button>
				</td>
			</tr>
		)
	}
}
export default ProductItem