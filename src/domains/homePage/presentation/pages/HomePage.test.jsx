import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getProducts } from '../../application/slices/products';
import HomePage from './index';

// Configuración del mock de Redux
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
}));

jest.mock('../../application/slices/products', () => ({
	getProducts: jest.fn(),
}));

jest.mock('../../../../shared/presentation/components/Navbar', () => () => <div data-testid="navbar">Navbar Mock</div>);
jest.mock('../components/CategoryList', () => () => <div data-testid="category-list">CategoryList Mock</div>);

jest.mock('../../../../shared/presentation/components/ProductCard', () => {
	// eslint-disable-next-line global-require
	const PropTypes = require('prop-types');
	const ProductCardMock = ({ productName }) => <div data-testid="product-card">{productName}</div>;

	ProductCardMock.propTypes = {
		productName: PropTypes.string.isRequired,
	};

	return ProductCardMock;
});

describe('HomePage Component', () => {
	const mockStore = configureStore([]);
	const mockDispatch = jest.fn();

	beforeEach(() => {
		useDispatch.mockReturnValue(mockDispatch);
		jest.clearAllMocks();
	});

	it('should render the component correctly', () => {
		const store = mockStore({});
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verificar que los subcomponentes están presentes
		expect(screen.getByTestId('navbar')).toBeInTheDocument();
		expect(screen.getByTestId('category-list')).toBeInTheDocument();
		expect(screen.getAllByTestId('product-card')).toHaveLength(4); // 1 principal + 3 mini cards
	});

	it('should dispatch getProducts on mount', () => {
		const store = mockStore({});
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verificar que se llama a dispatch con getProducts
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(getProducts).toHaveBeenCalled();
	});

	it('should render the hero section with correct text', () => {
		const store = mockStore({});
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verificar los textos de la sección Hero
		expect(screen.getByText('Explore')).toBeInTheDocument();
		expect(screen.getByText('The best & favorite motorcycle')).toBeInTheDocument();
	});

	it('should render the product card with the correct props', () => {
		const store = mockStore({});
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verificar el contenido de la tarjeta de producto principal
		expect(screen.getByText('Ichiban Electric 2032')).toBeInTheDocument();
		expect(screen.getByText('CXTR')).toBeInTheDocument();
		expect(screen.getByText('MBWS')).toBeInTheDocument();
		expect(screen.getByText('Jaguar')).toBeInTheDocument();
	});
});
