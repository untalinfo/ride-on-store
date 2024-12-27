import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postPaymentRequest } from '../../infrastructure/api';

export const initialState = {
	paymentArray: [],
	error: null,
	response: false,
};

export const postPayment = createAsyncThunk('payment/postPayment', async (data, { rejectWithValue }) => {
	try {
		const response = await postPaymentRequest(data);
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Payment = createSlice({
	name: 'payment',
	initialState,
	extraReducers: {
		[postPayment.pending]: (state) => {
			state.error = null;
		},
		[postPayment.rejected]: (state, { payload }) => {
			state.error = payload;
		},
		[postPayment.fulfilled]: (state, { payload }) => {
			state.paymentArray = payload;
		},
	},
});

export default Payment.reducer;
