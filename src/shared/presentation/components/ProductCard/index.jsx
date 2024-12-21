import React from 'react';

const ProductCard = () => {
	return (
		<div className="product-card">
			<div className="product-card__image">
				<img src="https://via.placeholder.com/150" alt="Product" />
			</div>
			<div className="product-card__info">
				<h3>Product name</h3>
				<p>Product price</p>
			</div>
		</div>
	);
};

export default ProductCard;
