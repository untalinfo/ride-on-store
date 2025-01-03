import { urlCreateOrder, urlGetProductById, urlPostCreateCardToken } from './backendUrls';

export const getProductByIdRequest = (productId) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlGetProductById(productId), requestOptions).then((response) => response.json());
};

export const postCreateCardTokenRequest = (payload) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	};
	return fetch(urlPostCreateCardToken(), requestOptions).then((response) => response.json());
};

export const postCreateOrderRequest = (payload) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	};
	return fetch(urlCreateOrder(), requestOptions).then((response) => response.json());
};

export default { getProductByIdRequest };
