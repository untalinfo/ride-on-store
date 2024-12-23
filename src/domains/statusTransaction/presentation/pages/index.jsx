import React, { useEffect } from 'react';
import { FAILED_STATUS } from '../../application/constants/status';
import './TransactionStatusPage.scss';
import { history } from '../../../../shared/application/helpers/history';
import { homePageRoute } from '../../../homePage/infrastructure/routing/routes';
import { productDetailPageRoute } from '../../../productDetail/infrastructure/routing/routes';

const TransactionStatusPage = () => {
	const status = 'success';

	useEffect(() => {
		const timer = setTimeout(() => {
			if (status === FAILED_STATUS) {
				history.push(homePageRoute);
			} else {
				history.push(productDetailPageRoute(1));
			}
		}, 3000);

		return () => clearTimeout(timer);
	}, [status]);

	return (
		<main className={`status-page-container ${status === FAILED_STATUS ? 'failed' : 'success'}`}>
			{status === FAILED_STATUS ? (
				<>
					<h2 className="title">Transaction failed</h2>
					<p className="description">Check your email for more details</p>
					<p className="redirection">Redirect to home...</p>
				</>
			) : (
				<>
					<h2 className="title">Transaction Successful</h2>
					<p className="description">Check your email for more details</p>
					<p className="redirection">Redirect...</p>
				</>
			)}
		</main>
	);
};

export default TransactionStatusPage;
