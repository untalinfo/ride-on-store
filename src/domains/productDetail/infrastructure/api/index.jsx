import { urlGetProductById } from './backendUrls';

export const getProductByIdRequest = (productId) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlGetProductById(productId), requestOptions).then((response) => response.json());
};

export default { getProductByIdRequest };
