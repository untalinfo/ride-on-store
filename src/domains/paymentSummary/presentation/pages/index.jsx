import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryDetails from '../components/DeliveryDetails';
import './PaymentSummaryPage.scss';
import SummaryTable from '../components/SummaryTable';
import ButtonBack from '../../../../shared/presentation/components/ButtonBack';
import Button from '../../../../shared/presentation/components/Button';
import { BANK_CARD_ICON } from '../../../../shared/application/constants/icons';
import { getProductSelector, orderDataSelector } from '../../../productDetail/application/selectors/product';

const PaymentSummaryPage = () => {
	const dispatch = useDispatch();
	const orderData = useSelector(orderDataSelector);
	const product = useSelector(getProductSelector);

	const handlePayment = () => {
		dispatch('data');
	};

	return (
		<div className="payment-summary-page-container">
			<ButtonBack />
			<section className="img-product-container">
				<img src={`${product?.image || 'https://via.placeholder.com/150'}`} alt="" className="img-product" />
			</section>
			<SummaryTable data={orderData} product={product} />
			<DeliveryDetails data={orderData} />
			<div className="button-buy-container">
				<Button label="Buy Now" leftIcon={BANK_CARD_ICON} onClick={handlePayment} />
			</div>
		</div>
	);
};
export default PaymentSummaryPage;
