import { createSelector } from '@reduxjs/toolkit';

export const productState = (state) => state.product;

export const getProductSelector = createSelector(productState, (product) => {
	return product?.product;
});
