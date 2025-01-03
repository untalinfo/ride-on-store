import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import './ProductDetailPage.scss';
import Button from '../../../../shared/presentation/components/Button';
import { ARROW_RIGHT_ICON, BANK_CARD_ICON } from '../../../../shared/application/constants/icons';
import HeroDetails from '../components/HeroDetails';
import { formatNumberWithDots } from '../../../../shared/application/helpers/common-functions';
import CharacteristicItems from '../components/CharacteristicItems';
import { CHARACTERISTIC_ITEM } from '../../application/constants/characteristicItem';
import Modal from '../../../../shared/presentation/components/Modal';
import FormPersonalData from '../components/Forms/FormPersonalData';
import CreditCardForm from '../components/Forms/CreditCardForm';
import { getProductById } from '../../application/slices/product';
import { getProductSelector } from '../../application/selectors/product';

const ProductDetailPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenCredit, setIsOpenCredit] = useState(false);
	const dispatch = useDispatch();
	const { productId } = useParams();
	const product = useSelector(getProductSelector);

	const handleShowModal = () => {
		setIsOpen(true);
	};

	const handleShowModalCredit = () => {
		setIsOpen(false);
		setIsOpenCredit(true);
	};

	useEffect(() => {
		dispatch(getProductById(productId));
	}, [dispatch, productId]);

	return (
		<div className="product-detail-page">
			<Toaster />
			<HeroDetails product={product} />
			<section className="product-description">
				<h1 className="title">{product?.title}</h1>
				<p className="description">{product?.description}</p>
			</section>
			<CharacteristicItems characteristics={CHARACTERISTIC_ITEM} />
			<section className="price-version">
				<div className="left-container">
					<p className="price">{`$ ${product.price && formatNumberWithDots(product.price?.toString())}`}</p>
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
				<Button label="Buy Now" onClick={handleShowModal} leftIcon={BANK_CARD_ICON} />
			</div>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showClose={false} contentStyle={{ height: 'min-content' }}>
				<FormPersonalData handleShowModalCredit={handleShowModalCredit} />
			</Modal>
			<Modal
				isOpen={isOpenCredit}
				onClose={() => setIsOpenCredit(false)}
				showClose={false}
				contentStyle={{ height: 'min-content' }}
			>
				<CreditCardForm productId={product?.id} onClose={() => setIsOpenCredit(false)} />
			</Modal>
		</div>
	);
};

export default ProductDetailPage;
