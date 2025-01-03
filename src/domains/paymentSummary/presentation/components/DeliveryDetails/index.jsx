import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryDetails.scss';

const DeliveryDetails = ({ data }) => {
	return (
		<section className="delivery-details-container">
			<p className="title">Delivery address</p>
			<p className="address">{data?.shipping_addrs_line}</p>
			<p className="city">{data?.shipping_address_city}</p>
		</section>
	);
};

DeliveryDetails.propTypes = {
	data: PropTypes.object,
};

export default DeliveryDetails;
