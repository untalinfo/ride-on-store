import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByIdRequest, postCreateOrderRequest } from '../../infrastructure/api';

export const initialState = {
	product: {},
	error: null,
	response: false,
	shippingData: [],
	order: {},
	isLoading: false,
};

export const getProductById = createAsyncThunk('product/getProductById', async (productId, { rejectWithValue }) => {
	try {
		const response = await getProductByIdRequest(productId);
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const postCreateOrder = createAsyncThunk('product/createOrder', async (data, { rejectWithValue }) => {
	try {
		const response = await postCreateOrderRequest(data);
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
		setResetShippingDataState: (state, { payload }) => {
			state.shippingData = [];
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
			state.product = payload;
		},
		[postCreateOrder.pending]: (state) => {
			state.error = null;
			state.isLoading = true;
		},
		[postCreateOrder.rejected]: (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		},
		[postCreateOrder.fulfilled]: (state, { payload }) => {
			state.order = payload;
			state.isLoading = false;
		},
	},
});

export const { setDataForm, setResetShippingDataState } = Product.actions;

export default Product.reducer;
