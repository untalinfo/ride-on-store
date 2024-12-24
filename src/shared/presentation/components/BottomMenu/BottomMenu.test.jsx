import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BottomMenu from './index';
import { homeRoute } from '../../../infrastructure/routing/routes';
import { history } from '../../../application/helpers/history';

jest.mock('../../../application/helpers/history', () => ({
	history: {
		push: jest.fn(),
	},
}));

describe('BottomMenu', () => {
	it('should render correctly', () => {
		const { getByText } = render(<BottomMenu />);
		expect(getByText('Home')).toBeInTheDocument();
	});

	it('should redirect to home on click', () => {
		const { getByText } = render(<BottomMenu />);
		fireEvent.click(getByText('Home'));
		expect(history.push).toHaveBeenCalledWith(homeRoute);
	});
});
