import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryDetails.scss';

const DeliveryDetails = ({ delivery }) => {
	return (
		<section className="delivery-details-container">
			<p className="title">Delivery address</p>
			<p className="address">{delivery.deliveryAddress}</p>
			<p className="city">{delivery.deliveryCity}</p>
		</section>
	);
};

DeliveryDetails.defaultProps = {
	delivery: {
		deliveryCity: 'cali',
		deliveryAddress: 'Calle 123',
	},
};
DeliveryDetails.propTypes = {
	delivery: PropTypes.shape({
		deliveryCity: PropTypes.string,
		deliveryAddress: PropTypes.string,
	}),
};

export default DeliveryDetails;
