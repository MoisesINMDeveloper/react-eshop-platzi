import React from "react"
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

const Layout = ({ childrens }) => {
	return (
		<div className="Layout">
			<Header />
			<Outlet />
		</div>
	);
};
export default Layout;