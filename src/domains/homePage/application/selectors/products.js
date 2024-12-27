import { createSelector } from '@reduxjs/toolkit';

export const productsState = (state) => state.products;

export const getProductsSelector = createSelector(productsState, (products) => {
	return products?.arrayProducts;
});
