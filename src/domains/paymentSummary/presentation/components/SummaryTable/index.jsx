import React from 'react';
import { formatNumberWithDots } from '../../../../../shared/application/helpers/common-functions';
import './SummaryTable.scss';

const SummaryTable = () => {
	return (
		<section className="summary-table-container">
			<div className="left-table">
				<p className="product-name">1 ICHIBAN Electric 2032</p>
				<p>Base fee</p>
				<p>Delivery fee</p>
				<p>Total</p>
			</div>
			<div className="right-table">
				<p>{formatNumberWithDots('34000000')}</p>
				<p>{formatNumberWithDots('100000')}</p>
				<p>{formatNumberWithDots('800000')}</p>
				<p className="total-payment">{formatNumberWithDots('34900000')}</p>
			</div>
		</section>
	);
};

export default SummaryTable;
