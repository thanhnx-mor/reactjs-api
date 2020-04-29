import React, { Component } from "react";

class Menu extends Component{
	render() {
		return (
			<div className="navbar navbar-default">
				<a className="navbar-brand" >Reactjs API</a>
				<ul className="nav navbar-nav">
					<li className="active">
						<a >Trang chủ</a>
					</li>
					<li>
						<a >Sản phẩm</a>
					</li>
				</ul>
			</div>
		)
	}
}
export default Menu