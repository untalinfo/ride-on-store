import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByIdRequest } from '../../infrastructure/api';

export const initialState = {
	product: [],
	error: null,
	response: false,
	shippingData: [],
};

export const getProductById = createAsyncThunk('product/getProductById', async (productId, { rejectWithValue }) => {
	try {
		const response = await getProductByIdRequest(productId);
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Product = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setDataForm: (state, { payload }) => {
			state.shippingData = { ...state.shippingData, ...payload };
		},
	},
	extraReducers: {
		[getProductById.pending]: (state) => {
			state.error = null;
		},
		[getProductById.rejected]: (state, { payload }) => {
			state.error = payload;
		},
		[getProductById.fulfilled]: (state, { payload }) => {
			state.arrayProducts = payload;
		},
	},
});

export const { setDataForm } = Product.actions;

export default Product.reducer;
