import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { MASTERCARD_REGEX, paymentCreditCardFields, VISA_REGEX } from '../../../../application/constants/formFields';
import creditCardDataSchema from '../../../../application/schema/creditCardData';
import Button from '../../../../../../shared/presentation/components/Button';
import { ARROW_RIGHT_ICON } from '../../../../../../shared/application/constants/icons';
import { setDataForm } from '../../../../application/slices/product';
import { history } from '../../../../../../shared/application/helpers/history';
import { paymentSummaryRoute } from '../../../../../paymentSummary/infrastructure/routing/routes';
import './CreditCardForm.scss';
import { shippingDataSelector } from '../../../../application/selectors/product';
import { MASTERCARD_ICON, VISA_ICON } from '../../../../application/constants/icons';

const CreditCardForm = ({ productId }) => {
	const dispatch = useDispatch();
	const dataForm = useSelector(shippingDataSelector);

	const defaultValues = {
		[paymentCreditCardFields.NAME]: dataForm[paymentCreditCardFields.NAME] || '',
		[paymentCreditCardFields.TYPE_ID]: dataForm[paymentCreditCardFields.TYPE_ID] || '',
		[paymentCreditCardFields.NUMBER_ID]: dataForm[paymentCreditCardFields.NUMBER_ID] || '',
		[paymentCreditCardFields.NUMBER_INSTALLMENTS]: dataForm[paymentCreditCardFields.NUMBER_INSTALLMENTS] || '',
		[paymentCreditCardFields.CITY]: dataForm[paymentCreditCardFields.CITY] || '',
		[paymentCreditCardFields.DELIVERY_ADDRESS]: dataForm[paymentCreditCardFields.DELIVERY_ADDRESS] || '',
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({ defaultValues, mode: 'onChange', resolver: yupResolver(creditCardDataSchema) });

	const onSubmit = (data) => {
		dispatch(setDataForm(data));
		history.push(paymentSummaryRoute(productId));
	};

	const handleExpirationDateInput = (event) => {
		const { value } = event.target;
		if (value.length === 2 && !value.includes('/')) {
			event.target.value = `${value}/`;
		} else if (value.length === 2 && value.includes('/')) {
			event.target.value = value.slice(0, -1);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-credit-card-container">
			<h3 className="title-form">Pay with your credit card</h3>
			<div className="container-card-number-input">
				<Controller
					name={paymentCreditCardFields.NUMBER}
					control={control}
					render={({ field }) => (
						<div className="input-with-logo">
							<input
								id="cardNumber"
								placeholder="Card number"
								className="input-styles"
								{...field}
								onChange={(e) => {
									field.onChange(e);
									// handleInputChange(e);
								}}
							/>
							{field?.value?.match(VISA_REGEX) && <i className={`${VISA_ICON} icon-card`} />}
							{field?.value?.match(MASTERCARD_REGEX) && <i className={`${MASTERCARD_ICON} icon-card`} />}
						</div>
					)}
				/>
				{errors[paymentCreditCardFields.NUMBER] && (
					<small className="color-primary">{errors[paymentCreditCardFields.NUMBER]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="expirationDate"
					type="text"
					placeholder="Expiration date MM/YY"
					className="input-styles"
					onInput={handleExpirationDateInput}
					{...register(paymentCreditCardFields.EXPIRY, { required: 'Expiration date is required' })}
				/>
				{errors[paymentCreditCardFields.EXPIRY] && (
					<small className="color-primary">{errors[paymentCreditCardFields.EXPIRY]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="cvc"
					type="password"
					placeholder="CVC"
					className="input-styles"
					{...register(paymentCreditCardFields.CVC, { required: 'CVC is required' })}
				/>
				{errors[paymentCreditCardFields.CVC] && (
					<small className="color-primary">{errors[paymentCreditCardFields.CVC]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="nameOnCard"
					placeholder="Name on card"
					className="input-styles"
					{...register(paymentCreditCardFields.NAME, { required: 'Name on card is required' })}
				/>
				{errors[paymentCreditCardFields.NAME] && (
					<small className="color-primary">{errors[paymentCreditCardFields.NAME]?.message}</small>
				)}
			</div>
			<div className="input-selector-container">
				<select
					id="typeIdentification"
					placeholder="Type"
					className="input-styles"
					{...register(paymentCreditCardFields.TYPE_ID, { required: 'Type identification is required' })}
				>
					<option value="">Type</option>
					<option value="passport">Passport</option>
					<option value="idCard">ID Card</option>
				</select>
				{errors.type_id && <small className="color-primary">{errors[paymentCreditCardFields.TYPE_ID]?.message}</small>}
			</div>
			<div>
				<input
					id="identificationNumber"
					className="input-styles"
					placeholder="Identification number"
					{...register(paymentCreditCardFields.NUMBER_ID, { required: 'Identification number is required' })}
				/>
				{errors[paymentCreditCardFields.NUMBER_ID] && (
					<small className="color-primary">{errors[paymentCreditCardFields.NUMBER_ID]?.message}</small>
				)}
			</div>
			<div className="input-selector-container">
				<select
					id="numberOfInstallments"
					className="input-styles"
					placeholder="Number of installments"
					{...register(paymentCreditCardFields.NUMBER_INSTALLMENTS, { required: 'Number of installments is required' })}
				>
					<option value="">Number of installments</option>
					<option value="1">1</option>
					<option value="3">3</option>
					<option value="6">6</option>
					<option value="12">12</option>
				</select>
				{errors[paymentCreditCardFields.NUMBER_INSTALLMENTS] && (
					<small className="color-primary">{errors[paymentCreditCardFields.NUMBER_INSTALLMENTS]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="city"
					placeholder="City"
					className="input-styles"
					{...register(paymentCreditCardFields.CITY, { required: 'City is required' })}
				/>
				{errors[paymentCreditCardFields.CITY] && (
					<small className="color-primary">{errors[paymentCreditCardFields.CITY]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="deliveryAddress"
					placeholder="Delivery address"
					className="input-styles"
					{...register(paymentCreditCardFields.DELIVERY_ADDRESS, { required: 'Delivery address is required' })}
				/>
				{errors[paymentCreditCardFields.DELIVERY_ADDRESS] && (
					<small className="color-primary">{errors[paymentCreditCardFields.DELIVERY_ADDRESS]?.message}</small>
				)}
			</div>
			<div className="form-button-container">
				<Button type="submit" rightIcon={ARROW_RIGHT_ICON}>
					<p className="text-button">Next</p>
				</Button>
			</div>
		</form>
	);
};

CreditCardForm.propTypes = {
	productId: PropTypes.string.isRequired,
};

export default CreditCardForm;
