import React from 'react';
import { useDispatch } from 'react-redux';
import DeliveryDetails from '../components/DeliveryDetails';
import './PaymentSummaryPage.scss';
import SummaryTable from '../components/SummaryTable';
import ButtonBack from '../../../../shared/presentation/components/ButtonBack';
import Button from '../../../../shared/presentation/components/Button';
import { BANK_CARD_ICON } from '../../../../shared/application/constants/icons';

const PaymentSummaryPage = () => {
	const dispatch = useDispatch();

	const handlePayment = () => {
		dispatch('data');
	};

	return (
		<div className="payment-summary-page-container">
			<ButtonBack />
			<section className="img-product-container">
				<img src={`${'https://via.placeholder.com/150'}`} alt="" className="img-product" />
			</section>
			<SummaryTable />
			<DeliveryDetails />
			<div className="button-buy-container">
				<Button label="Buy Now" leftIcon={BANK_CARD_ICON} onClick={handlePayment} />
			</div>
		</div>
	);
};
export default PaymentSummaryPage;
