import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import Button from '../../../../../../shared/presentation/components/Button';
import { ARROW_RIGHT_ICON } from '../../../../../../shared/application/constants/icons';
import './FormPersonalData.scss';
import personalDataSchema from '../../../../application/schema/personalData';
import { personalDataFields } from '../../../../application/constants/formFields';
import { setDataForm } from '../../../../application/slices/product';
import { shippingDataSelector } from '../../../../application/selectors/product';

const FormPersonalData = ({ handleShowModalCredit }) => {
	const dispatch = useDispatch();
	// const payment = useSelector('getPayment');
	// const dispatch = useDispatch();
	const dataForm = useSelector(shippingDataSelector);

	const defaultValues = {
		[personalDataFields.FULL_NAME]: dataForm.full_name || '',
		[personalDataFields.EMAIL]: dataForm.email || '',
		[personalDataFields.PHONE]: dataForm.phone_number || '',
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({ defaultValues, mode: 'onChange', resolver: yupResolver(personalDataSchema) });

	const handleInputChange = (evt) => {
		// const { name, value } = evt.target;
		// dispatch(setPayment({ [name]: value }));
	};

	const handleInputFocus = (evt) => {
		// dispatch(setFocusElement(evt.target.name));
	};

	const onSubmit = (data) => {
		dispatch(setDataForm(data));
		handleShowModalCredit();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-personal-data-container">
			<h3 className="title-form">Pay with your credit card</h3>
			<div>
				<Controller
					name={personalDataFields.FULL_NAME}
					control={control}
					render={({ field }) => (
						<input
							id="name"
							placeholder="Name"
							className="input-styles"
							{...field}
							onFocus={handleInputFocus}
							onChange={(e) => {
								field.onChange(e);
								handleInputChange(e);
							}}
						/>
					)}
				/>
				{errors[personalDataFields.FULL_NAME] && (
					<small className="color-primary">{errors[personalDataFields.FULL_NAME]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="email"
					type="email"
					className="input-styles"
					placeholder="Email"
					{...register(personalDataFields.EMAIL, { required: 'Email is required' })}
				/>
				{errors[personalDataFields.EMAIL] && (
					<small className="color-primary">{errors[personalDataFields.EMAIL]?.message}</small>
				)}
			</div>
			<div>
				<input
					id="phone"
					type="tel"
					placeholder="Phone"
					className="input-styles"
					{...register(personalDataFields.PHONE, { required: 'Phone is required' })}
				/>
				{errors[personalDataFields.PHONE] && (
					<small className="color-primary">{errors[personalDataFields.PHONE]?.message}</small>
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

FormPersonalData.propTypes = {
	handleShowModalCredit: PropTypes.func.isRequired,
};

export default FormPersonalData;
