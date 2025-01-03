import React from 'react';
import PropTypes from 'prop-types';
import { formatNumberWithDots } from '../../../../../shared/application/helpers/common-functions';
import './SummaryTable.scss';

const SummaryTable = ({ data, product }) => {
	return (
		<section className="summary-table-container">
			<div className="left-table">
				<p className="product-name">1 ICHIBAN Electric 2032</p>
				<p>Base fee</p>
				<p>Delivery fee</p>
				<p>Total</p>
			</div>
			<div className="right-table">
				<p>{formatNumberWithDots(product?.price.toString())}</p>
				<p>{formatNumberWithDots(data?.delivery_fee_in_cents.toString())}</p>
				<p>{formatNumberWithDots(data?.base_fee_in_cents.toString())}</p>
				<p className="total-payment">{formatNumberWithDots(data?.total_amount_in_cents.toString())}</p>
			</div>
		</section>
	);
};

SummaryTable.propTypes = {
	data: PropTypes.object,
	product: PropTypes.object,
};

export default SummaryTable;
