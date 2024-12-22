import React from 'react';
import './ProductDetailPage.scss';
import Button from '../../../../shared/presentation/components/Button';
import { BANK_CARD_ICON } from '../../../../shared/application/constants/icons';

const ProductDetailPage = () => {
	return (
		<div className="product-detail-page">
			<h1>Product Detail</h1>
			{/* Add your product detail components here */}
			<Button label="Buy Now" leftIcon={BANK_CARD_ICON} />
		</div>
	);
};

export default ProductDetailPage;
