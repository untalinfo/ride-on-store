import { urlPostPayment } from './backendUrls';

export const postPaymentRequest = (payload) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
	};
	return fetch(urlPostPayment, requestOptions).then((response) => response.json());
};

export default { postPaymentRequest };
