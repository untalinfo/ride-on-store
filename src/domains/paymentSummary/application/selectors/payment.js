import { createSelector } from '@reduxjs/toolkit';

export const paymentState = (state) => state.payment;

export const getPaymentSelector = createSelector(paymentState, (payment) => {
	return payment?.paymentArray;
});
