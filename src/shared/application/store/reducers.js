import { combineReducers } from 'redux';
import example, { initialState as exampleInitial } from '../../../domains/exampleDomain/application/slices/example';
import products from '../../../domains/homePage/application/slices/products';

export const initialStates = {
	example: exampleInitial,
};

export default combineReducers({
	example,
	products,
});
