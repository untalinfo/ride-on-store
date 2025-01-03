export const personalDataFields = Object.freeze({
	FULL_NAME: 'customer_full_name',
	EMAIL: 'customer_email',
	PHONE: 'customer_phone_number',
});

export const paymentCreditCardFields = Object.freeze({
	NUMBER: 'card_number',
	EXPIRY: 'card_expiration_date',
	CVC: 'card_cvc',
	NAME: 'card_holder',
	TYPE_ID: 'type_id',
	NUMBER_ID: 'numer_id',
	NUMBER_INSTALLMENTS: 'number_installments',
	CITY: 'shipping_address_city',
	DELIVERY_ADDRESS: 'shipping_addrs_line',
	TERMS_CONDICTIONS: 'terms_and_conditions',
	EXP_MONTH: 'card_exp_month',
	EXP_YEAR: 'card_exp_year',
	PRODUCT_IDS: 'product_ids',
});

export const products = [
	{
		id: 1,
		name: 'ICHIBAN Electric 2032',
		description:
			"Ichiban isn't simply a mode of transport; it's an escape, a liberating streak of freedom in an excessively interconnected world.",
		imageUrl: 'https://ride-on-store.s3.us-east-2.amazonaws.com/ichiban.png',
		price: '3400000',
	},
	{
		id: 2,
		name: 'CXTBR',
		description: 'High-performance motorcycle for thrill-seekers and speed enthusiasts.',
		imageUrl: 'https://ride-on-store.s3.us-east-2.amazonaws.com/cxbtr.png',
		price: '4800000',
	},
	{
		id: 3,
		name: 'MBWS',
		description: 'Reliable and versatile motorcycle, perfect for both urban and off-road adventures.',
		imageUrl: 'https://ride-on-store.s3.us-east-2.amazonaws.com/mbws.png',
		price: '2200000',
	},
	{
		id: 4,
		name: 'Jaguar',
		description: 'A classic motorcycle with modern enhancements for an unmatched riding experience.',
		imageUrl: 'https://ride-on-store.s3.us-east-2.amazonaws.com/jaguar.png',
		price: '2800000',
	},
];

export const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/;
export const MASTERCARD_REGEX = /^5[1-5][0-9]{14}$/;
export const TERMS_CONDICTIONS_LINK = 'https://wompi.com/assets/downloadble/reglamento-Usuarios-Colombia.pdf';
