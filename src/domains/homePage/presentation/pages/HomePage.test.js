import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './index';

describe('HomePage Component', () => {
	test('renders Navbar component', () => {
		render(<HomePage />);
		const navbarElement = screen.getByRole('navigation');
		expect(navbarElement).toBeInTheDocument();
	});

	test('renders hero section with correct text', () => {
		render(<HomePage />);
		const heroTitle = screen.getByText(/Explore/i);
		const heroDescription = screen.getByText(/The best & favorite motorcycle/i);
		expect(heroTitle).toBeInTheDocument();
		expect(heroDescription).toBeInTheDocument();
	});

	test('renders CategoryList component', () => {
		render(<HomePage />);
		const categoryListElement = screen.getByTestId('category-list');
		expect(categoryListElement).toBeInTheDocument();
	});

	test('renders ProductCard component with correct props', () => {
		render(<HomePage />);
		const productCardElement = screen.getByText(/Ichiban Electric 2032/i);
		expect(productCardElement).toBeInTheDocument();
		const productPriceElement = screen.getByText(/34.000.000/i);
		expect(productPriceElement).toBeInTheDocument();
	});

	test('renders popular products section', () => {
		render(<HomePage />);
		const popularProductsElement = screen.getByText(/Popular/i);
		expect(popularProductsElement).toBeInTheDocument();
	});
});
