import React, { Component } from "react";
import { Route, Link } from "react-router-dom"
const menus = [
	{
		name: 'Trang chủ',
		to: "/",
		exact: true
	},
	{
		name: 'Sản phẩm',
		to: '/product-list',
		exact: true
	}
]
const MenuLink = ({label, to, exact}) => {
	return (
		<Route
			path={to}
			exact={exact}
			children={({match}) => {
				let active = match ? 'active' : '';
				return (
					<li className={active}>
						<Link to={to}>
							{label}
						</Link>
					</li>
				)
			}}
		/>
	)
}

class Menu extends Component{
	render() {
		return (
			<div className="navbar navbar-default">
				<a className="navbar-brand" >Reactjs API</a>
				<ul className="nav navbar-nav">
					{this.showMenus(menus)}
				</ul>
			</div>
		)
	}
	showMenus = (menus) => {
		let result = null
			if ( menus.length > 0 ) {
				result = menus.map((menu, index) => {
					return (
						<MenuLink
							key={index}
							label={menu.name}
							to={menu.to}
							exact={menu.exact}
						/>
					)
				})
			}
		return result
	}
}
export default Menu