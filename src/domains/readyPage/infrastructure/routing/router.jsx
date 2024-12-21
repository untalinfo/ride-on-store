import React from 'react';
import { Route } from 'react-router-dom';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { readyPageRoute } from './routes';
// import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import ReadyPage from '../../presentantion/pages';

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: readyPageRoute,
			page: ReadyPage,
			routeComponent: Route,
			layout: ({ children }) => <>{children}</>, // Optional param to custom layout
		},
	],
};

export default exampleRouter;
