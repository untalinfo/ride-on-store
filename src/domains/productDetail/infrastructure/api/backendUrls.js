export const urlGetProductById = (productId = ':productId') =>
	`https://ead5-181-54-0-246.ngrok-free.app/products/${productId}`;

export const urlCreateOrder = () => `create-order`;

export default { urlGetProductById };
