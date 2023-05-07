import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import css from './index.module.css';

const Layout: React.FC = () => {
	return (
		<div className={css.layout}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
