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
	[paymentCreditCardFields.TYPE_ID]: yup.string().required('Type id is required'),
	[paymentCreditCardFields.NUMBER_ID]: yup
		.string()
		.required('Id number is required')
		.min(8, 'Id number must be at least 2 characters'),
	[paymentCreditCardFields.NUMBER_INSTALLMENTS]: yup.string().required('Number of installments is required'),
	[paymentCreditCardFields.CITY]: yup.string().required('City address is required'),
	[paymentCreditCardFields.DELIVERY_ADDRESS]: yup.string().required('Delivery address is required'),
	[paymentCreditCardFields.TERMS_CONDICTIONS]: yup.boolean().oneOf([true], 'Terms and conditions must be accepted'),
};

const creditCardDataSchema = yup.object().shape(creditCardDataValidation);

export default creditCardDataSchema;
