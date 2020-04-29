import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/san-pham',
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />
	}
]

export default routes