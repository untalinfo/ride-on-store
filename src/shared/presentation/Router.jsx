import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { importFiles } from '../application/helpers/common-functions';
import ReadyPage from '../../domains/readyPage/presentantion/pages';

const importRouter = import.meta.glob('../../domains/**/infrastructure/routing/router.*');
const routerDomain = await importFiles(importRouter);
const routes = routerDomain.map((route) => route.default);

const Router = () => {
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
