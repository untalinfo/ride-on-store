import { createSelector } from '@reduxjs/toolkit';

export const productState = (state) => state.product;

export const getProductSelector = createSelector(productState, (product) => {
	return product?.product;
});

export const shippingDataSelector = createSelector(productState, (product) => {
	return product?.shippingData;
});

export const isLoadingOrderSelector = createSelector(productState, (product) => {
	return product?.isLoading;
});

export const orderDataSelector = createSelector(productState, (product) => {
	return product?.responseOrder?.data;
});
