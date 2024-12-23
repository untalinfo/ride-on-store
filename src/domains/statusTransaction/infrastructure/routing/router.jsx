import React from 'react';
import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { transactionStatusPageRoute } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import TransactionStatusPage from '../../presentation/pages';

const transactionStatusRouter = {
	layout: AdminLayout,
	router: [
		{
			path: transactionStatusPageRoute(),
			page: TransactionStatusPage,
			routeComponent: UnauthenticatedRoute,
			layout: ({ children }) => <>{children}</>,
		},
	],
};

export default transactionStatusRouter;
