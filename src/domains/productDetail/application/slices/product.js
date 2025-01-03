import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByIdRequest, postCreateCardTokenRequest, postCreateOrderRequest } from '../../infrastructure/api';

export const initialState = {
	product: {},
	error: null,
	responseOrder: {},
	shippingData: [],
	isLoading: false,
	responseCarToken: {},
};

export const getProductById = createAsyncThunk('product/getProductById', async (productId, { rejectWithValue }) => {
	try {
		const response = await getProductByIdRequest(productId);
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const postCreateCardToken = createAsyncThunk('product/createCardToken', async (data, { rejectWithValue }) => {
	try {
		const response = await postCreateCardTokenRequest(data);
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
		[postCreateCardToken.pending]: (state) => {
			state.error = null;
			state.isLoading = true;
		},
		[postCreateCardToken.rejected]: (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		},
		[postCreateCardToken.fulfilled]: (state, { payload }) => {
			state.order = payload;
			state.isLoading = false;
			state.responseCarToken = payload;
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
			state.isLoading = false;
			state.responseOrder = payload;
		},
	},
});

export const { setDataForm, setResetShippingDataState } = Product.actions;

export default Product.reducer;
