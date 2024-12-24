import * as yup from 'yup';
import { paymentCreditCardFields } from '../constants/formFields';

const creditCardDataValidation = {
	[paymentCreditCardFields.NUMBER]: yup
		.string()
		.required('Card number is required')
		.matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
	[paymentCreditCardFields.NAME]: yup
		.string()
		.required('Card holder name is required')
		.min(2, 'Card holder name must be at least 2 characters')
		.max(50, 'Card holder name must be at most 50 characters'),
	[paymentCreditCardFields.EXPIRY]: yup
		.string()
		.required('Expiration date is required')
		.matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiration date must be in MM/YY or MM/YYYY format'),
	[paymentCreditCardFields.CVC]: yup
		.string()
		.required('CVV is required')
		.matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
};

const creditCardDataSchema = yup.object().shape(creditCardDataValidation);

export default creditCardDataSchema;
