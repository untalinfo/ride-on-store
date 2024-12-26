import { urlGetProducts } from './backendUrls';

export const getProductsRequest = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlGetProducts, requestOptions).then((response) => response.json());
};

export default { getProductsRequest };
