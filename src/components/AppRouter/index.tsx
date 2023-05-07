import * as React from 'react';
import { appRoutes } from 'router';
import { Route, Routes } from 'react-router';
import Layout from 'components/Layout';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{appRoutes.map(route => (
					<Route
						key={route.path ? route.path : Date.now()}
						index={route.index}
						path={route.path}
						element={<route.element />}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default AppRouter;
