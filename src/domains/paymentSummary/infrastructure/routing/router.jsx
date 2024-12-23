// import React from 'react';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { paymentSummaryRoute } from './routes';
import PaymentSummaryPage from '../../presentation/pages';

const paymentSummaryRouter = {
	layout: AdminLayout,
	router: [
		{
			path: paymentSummaryRoute(),
			page: PaymentSummaryPage,
			routeComponent: UnauthenticatedRoute,
			layout: AdminLayout,
		},
	],
};

export default paymentSummaryRouter;
