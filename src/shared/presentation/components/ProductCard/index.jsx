import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCard.scss';
import { ARROW_RIGHT_ICON } from '../../../application/constants/icons';
import { history } from '../../../application/helpers/history';
import { formatNumberWithDots } from '../../../application/helpers/common-functions';

const ProductCard = ({ isMini, urlRedirection, productImg, productName, productPrice }) => {
	const handleRedirection = () => {
		history.push(urlRedirection);
	};

	return (
		<div className={`product-card-container ${isMini ? 'mini' : ''}`}>
			<div className="product-card__image">
				<img
					className="product-img"
					src={`${productImg || 'https://ride-on-store.s3.us-east-2.amazonaws.com/ichiban.png'}`}
					alt="Product"
				/>
				{!isMini && (
					<div className="product-card__info">
						<div className="text-container">
							<h3 className="product-name">{productName}</h3>
							<p className="price">{`$ ${productPrice && formatNumberWithDots(productPrice.toString())}`}</p>
						</div>
						<i className={`${ARROW_RIGHT_ICON} icon-redirection`} onClick={handleRedirection} />
					</div>
				)}
			</div>
			{isMini && (
				<div className="product-card-mini__info">
					<p className="product-name">{productName}</p>
				</div>
			)}
		</div>
	);
};

ProductCard.propTypes = {
	isMini: PropTypes.bool,
	urlRedirection: PropTypes.string,
	productImg: PropTypes.string,
	productName: PropTypes.string,
	productPrice: PropTypes.string,
};

export default ProductCard;
