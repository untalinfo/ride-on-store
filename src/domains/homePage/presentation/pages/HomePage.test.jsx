/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector, Provider } from 'react-redux';
import HomePage from './index';
import { getProducts } from '../../application/slices/products';

// Mock de subcomponentes
jest.mock('../../../../shared/presentation/components/Navbar', () => () => <div data-testid="navbar">Navbar Mock</div>);
jest.mock('../components/CategoryList', () => () => <div data-testid="category-list">CategoryList Mock</div>);
jest.mock('../../../../shared/presentation/components/ProductCard', () => {
	const ProductCardMock = ({ productName }) => <div data-testid="product-card">{productName}</div>;
	return ProductCardMock;
});

// Mock de Redux
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

jest.mock('../../application/slices/products', () => ({
	getProducts: jest.fn(),
}));

describe('HomePage Component', () => {
	const mockStore = configureStore([]);
	const mockDispatch = jest.fn();

	beforeEach(() => {
		useDispatch.mockReturnValue(mockDispatch);
		jest.clearAllMocks();
	});

	it('should render the HomePage with Navbar, CategoryList, and products', () => {
		const store = mockStore({});
		useSelector.mockReturnValue([
			{ id: 1, title: 'Ichiban Electric 2032', price: 34000000, image: 'ichiban.jpg' },
			{ id: 2, title: 'Jaguar CX-R1', price: 48000000, image: 'jaguar.jpg' },
			{ id: 3, title: 'Honda CRX 500', price: 22000000, image: 'honda.jpg' },
		]);

		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verifica que los subcomponentes estén presentes
		expect(screen.getByTestId('navbar')).toBeInTheDocument();
		expect(screen.getByTestId('category-list')).toBeInTheDocument();

		// Verifica que se renderiza el primer producto en el carrusel
		expect(screen.getByText('Ichiban Electric 2032')).toBeInTheDocument();

		// Verifica que se renderizan las tarjetas de productos populares
		expect(screen.getAllByTestId('product-card')).toHaveLength(3);
		expect(screen.getByText('Jaguar CX-R1')).toBeInTheDocument();
		expect(screen.getByText('Honda CRX 500')).toBeInTheDocument();
	});

	it('should dispatch getProducts on mount', () => {
		const store = mockStore({});
		useSelector.mockReturnValue([]);

		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verifica que `dispatch` se llama con la acción `getProducts`
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(getProducts).toHaveBeenCalled();
	});

	it('should render the hero section with correct text', () => {
		const store = mockStore({});
		useSelector.mockReturnValue([]);

		render(
			<Provider store={store}>
				<HomePage />
			</Provider>,
		);

		// Verifica los textos del hero section
		expect(screen.getByText('Explore')).toBeInTheDocument();
		expect(screen.getByText('The best & favorite motorcycle')).toBeInTheDocument();
	});
});
