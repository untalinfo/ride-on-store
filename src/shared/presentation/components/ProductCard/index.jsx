import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCard.scss';
import { ARROW_RIGHT_ICON } from '../../../application/constants/icons';
import { history } from '../../../application/helpers/history';
import { formatNumberWithDots } from '../../../application/helpers/common-functions';

const ProductCard = ({ isMini = false, urlRedirection, productImg, productName, productPrice }) => {
	const handleRedirection = () => {
		history.push(urlRedirection);
	};

	return (
		<div className={`product-card-container ${isMini ? 'mini' : ''}`}>
			<div className="product-card__image">
				<img className="product-img" src={`${productImg || 'https://via.placeholder.com/150'}`} alt="Product" />
				{!isMini && (
					<div className="product-card__info">
						<div className="text-container">
							<h3 className="product-name">Product name</h3>
							<p className="price">{`$ ${formatNumberWithDots('8000000')}`}</p>
						</div>
						<i className={`${ARROW_RIGHT_ICON} icon-redirection`} onClick={handleRedirection} />
					</div>
				)}
			</div>
			{isMini && (
				<div className="product-card-mini__info">
					<p className="product-name">Product N</p>
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
