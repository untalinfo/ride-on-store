// import React from 'react';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { homePageRoute } from './routes';
import HomePage from '../../presentation/pages';

const homePageRouter = {
	layout: AdminLayout,
	router: [
		{
			path: homePageRoute,
			page: HomePage,
			routeComponent: UnauthenticatedRoute,
			layout: AdminLayout,
		},
	],
};

export default homePageRouter;
