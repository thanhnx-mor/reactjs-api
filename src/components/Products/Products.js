import React, { Component } from "react";
import ProductItem from "./ProductItem";
class Products extends Component{
	render() {
		return (
			<div className="panel panel-primary mt-10">
				<div className="panel-heading">
					<h3 className="panel-title">Product list</h3>
				</div>
				<div className="panel-body">
					
					<table className="table table-bordered table-hover">
						<thead>
						<tr>
							<th>STT</th>
							<th>Mã sản phẩm</th>
							<th>Tên sản phẩm</th>
							<th>Giá</th>
							<th>Trạng thái</th>
							<th>Hành động</th>
						</tr>
						</thead>
						<tbody>
						<ProductItem/>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
export default Products