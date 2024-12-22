import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CategoryList from './index';
import { CATEGORIES } from '../../../application/constants/categories';

describe('CategoryList', () => {
	it('should render category list', () => {
		const { getByTestId } = render(<CategoryList />);
		const categoryList = getByTestId('category-list');
		expect(categoryList).toBeInTheDocument();
	});

	it('should render all categories', () => {
		const { getByText } = render(<CategoryList />);
		CATEGORIES.forEach((category) => {
			expect(getByText(category.name)).toBeInTheDocument();
		});
	});

	it('should highlight selected category', () => {
		const { getByText } = render(<CategoryList />);
		const firstCategory = getByText(CATEGORIES[0].name);
		fireEvent.click(firstCategory);
		expect(firstCategory).toHaveClass('selected');
	});
});
