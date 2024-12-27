import { urlCreateOrder, urlGetProductById } from './backendUrls';

export const getProductByIdRequest = (productId) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlGetProductById(productId), requestOptions).then((response) => response.json());
};

export const postCreateOrderRequest = (payload) => {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(payload),
	};
	return fetch(urlCreateOrder(), requestOptions).then((response) => response.json());
};

export default { getProductByIdRequest };
