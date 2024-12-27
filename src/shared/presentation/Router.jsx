import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import ReadyPage from '../../domains/readyPage/presentantion/pages';

const Router = () => {
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		const importRouter = import.meta.glob('../../domains/**/infrastructure/routing/router.*');

		const loadRoutes = async () => {
			const routerModules = await Promise.all(Object.values(importRouter).map((importFn) => importFn()));
			const loadedRoutes = routerModules.map((module) => module.default);
			setRoutes(loadedRoutes);
		};

		loadRoutes();
	}, []);
	const [isInitialLoad, setIsInitialLoad] = useState(!localStorage.getItem('hasLoaded'));

	const defaultLayout = ({ children }) => <>{children}</>;

	useEffect(() => {
		if (isInitialLoad) {
			const timer = setTimeout(() => {
				setIsInitialLoad(false);
				localStorage.setItem('hasLoaded', 'true');
			}, 5000);

			return () => clearTimeout(timer);
		}
		return undefined;
	}, [isInitialLoad]);

	if (isInitialLoad) {
		return <ReadyPage />;
	}

	return (
		<Switch>
			{routes.map((router) => {
				return router.router.map(({ path, page: Component, routeComponent: Route, exact = true, layout, ...rest }) => (
					<Route
						key={path}
						exact={exact}
						path={path}
						component={Component}
						layout={layout || router.layout || defaultLayout}
						{...rest}
					/>
				));
			})}
		</Switch>
	);
};

export default Router;
