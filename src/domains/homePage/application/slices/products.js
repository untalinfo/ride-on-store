import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductsRequest } from '../../infrastructure/api';

export const initialState = {
	arrayProducts: [],
	error: null,
	response: false,
};

export const getProducts = createAsyncThunk('products/getProducts', async (_, { rejectWithValue }) => {
	try {
		const response = await getProductsRequest();
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Products = createSlice({
	name: 'products',
	initialState,
	extraReducers: {
		[getProducts.pending]: (state) => {
			state.error = null;
		},
		[getProducts.rejected]: (state, { payload }) => {
			state.error = payload;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.arrayProducts = payload;
		},
	},
});

export default Products.reducer;
