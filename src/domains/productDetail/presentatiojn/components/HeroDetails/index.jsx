import React from 'react';
import PropTypes from 'prop-types';
import './HeroDetails.scss';
import ButtonBack from '../../../../../shared/presentation/components/ButtonBack';

const HeroDetails = ({ product }) => {
	return (
		<div className="hero-details-container">
			<img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="product-img" />
			<section className="hero-details">
				<ButtonBack />
				<div className="hero-stock-contianer">
					<p className="text">Stock</p>
					<p className="stock">{product.stock || '10'}</p>
				</div>
			</section>
		</div>
	);
};

HeroDetails.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		stock: PropTypes.number.isRequired,
	}).isRequired,
};

export default HeroDetails;
