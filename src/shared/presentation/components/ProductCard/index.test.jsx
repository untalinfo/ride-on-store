import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from './index';
import { history } from '../../../application/helpers/history';

jest.mock('../../../application/helpers/history', () => ({
	history: {
		push: jest.fn(),
	},
}));

describe('ProductCard', () => {
	const defaultProps = {
		isMini: false,
		urlRedirection: '/product/1',
		productImg: 'https://via.placeholder.com/150',
		productName: 'Test Product',
		productPrice: '1000',
	};

	it('should render product card', () => {
		const { getByText } = render(<ProductCard {...defaultProps} />);
		expect(getByText('Test Product')).toBeInTheDocument();
		expect(getByText((content, element) => content.includes('1.000'))).toBeInTheDocument();
	});

	it('should handle redirection on icon click', () => {
		const { container } = render(<ProductCard {...defaultProps} />);
		const icon = container.querySelector('.icon-redirection');
		fireEvent.click(icon);
		expect(history.push).toHaveBeenCalledWith('/product/1');
	});

	it('should render mini product card', () => {
		const miniProps = { ...defaultProps, isMini: true };
		const { getByText } = render(<ProductCard {...miniProps} />);
		expect(getByText('Test Product')).toBeInTheDocument();
		expect(() => getByText((content, element) => content.includes('1.000'))).toThrow();
	});
});
