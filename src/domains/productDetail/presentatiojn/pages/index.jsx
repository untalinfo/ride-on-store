import React from 'react';
import './ProductDetailPage.scss';
import Button from '../../../../shared/presentation/components/Button';
import { ARROW_RIGHT_ICON, BANK_CARD_ICON } from '../../../../shared/application/constants/icons';
import HeroDetails from '../components/HeroDetails';
import { formatNumberWithDots } from '../../../../shared/application/helpers/common-functions';
import CharacteristicItems from '../components/CharacteristicItems';
import { CHARACTERISTIC_ITEM } from '../../application/constants/characteristicItem';

const ProductDetailPage = () => {
	return (
		<div className="product-detail-page">
			<HeroDetails product={'product'} />
			<section className="product-description">
				<h1>Product Name</h1>
				<p>
					Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto
					de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
					imprenta) desconocido usó una galería de textos
				</p>
			</section>
			<CharacteristicItems characteristics={CHARACTERISTIC_ITEM} />
			<section className="price-version">
				<div className="left-container">
					<p className="price">{`$ ${formatNumberWithDots('34000000')}`}</p>
					<p className="text">Ex-showroom price</p>
				</div>
				<div className="right-container">
					<p className="text">Version</p>
					<p className="version">
						GT Fastback 5.0L v8 <i className={ARROW_RIGHT_ICON} />
					</p>
				</div>
			</section>
			<div className="button-product-container">
				<Button label="Buy Now" leftIcon={BANK_CARD_ICON} />
			</div>
		</div>
	);
};

export default ProductDetailPage;
