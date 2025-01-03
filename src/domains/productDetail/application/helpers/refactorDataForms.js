import { paymentCreditCardFields, personalDataFields } from '../constants/formFields';

export const PERSONAL_DATA_TYPE = 'personalData';

export function refactorDataForms(formData, type) {
	if (type === PERSONAL_DATA_TYPE) {
		return {
			[personalDataFields.FULL_NAME]: formData[personalDataFields.FULL_NAME],
			[personalDataFields.EMAIL]: formData[personalDataFields.EMAIL],
			[personalDataFields.PHONE]: formData[personalDataFields.PHONE],
			[paymentCreditCardFields.PRODUCT_IDS]: formData[paymentCreditCardFields.PRODUCT_IDS],
			[paymentCreditCardFields.DELIVERY_ADDRESS]: formData[paymentCreditCardFields.DELIVERY_ADDRESS],
			[paymentCreditCardFields.CITY]: formData[paymentCreditCardFields.CITY],
		};
	}
	const [expMonth, expYear] = formData.card_expiration_date.split('/');
	return {
		[paymentCreditCardFields.NUMBER]: formData[paymentCreditCardFields.NUMBER],
		[paymentCreditCardFields.CVC]: formData[paymentCreditCardFields.CVC],
		[paymentCreditCardFields.EXP_MONTH]: expMonth,
		[paymentCreditCardFields.EXP_YEAR]: expYear,
		[paymentCreditCardFields.NAME]: formData[paymentCreditCardFields.NAME],
	};
}
