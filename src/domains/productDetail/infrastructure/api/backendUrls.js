import { urlBase } from '../../../../shared/infrastructure/api/apiHandler';

export const urlGetProductById = (productId = ':productId') => `${urlBase}products/${productId}`;
export const urlPostCreateCardToken = () => `${urlBase}orders/token/cards`;

export const urlCreateOrder = () => `${urlBase}orders/`;

export default { urlGetProductById };
