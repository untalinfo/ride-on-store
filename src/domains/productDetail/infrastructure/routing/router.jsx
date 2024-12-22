// import React from 'react';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { productDetailPageRoute } from './routes';
import ProductDetailPage from '../../presentatiojn/pages';

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: productDetailPageRoute(),
			page: ProductDetailPage,
			routeComponent: UnauthenticatedRoute,
			layout: AdminLayout,
		},
	],
};

export default exampleRouter;
