import React from 'react';
import PropTypes from 'prop-types';
import './HeroDetails.scss';
import ButtonBack from '../../../../../shared/presentation/components/ButtonBack';

const HeroDetails = ({ product }) => {
	return (
		<div className="hero-details-container">
			<img
				src={product.image || 'https://ride-on-store.s3.us-east-2.amazonaws.com/ichiban2.png'}
				alt={product.title}
				className="product-img"
			/>
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
		title: PropTypes.string.isRequired,
		stock: PropTypes.number.isRequired,
	}).isRequired,
};

export default HeroDetails;
