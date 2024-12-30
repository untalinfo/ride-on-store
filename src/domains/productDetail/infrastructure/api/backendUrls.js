import { urlBase } from '../../../../shared/infrastructure/api/apiHandler';

export const urlGetProductById = (productId = ':productId') => `${urlBase}products/${productId}`;

export const urlCreateOrder = () => `create-order`;

export default { urlGetProductById };
