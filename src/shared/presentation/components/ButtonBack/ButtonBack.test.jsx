import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonBack from './index';
import { history } from '../../../application/helpers/history';

jest.mock('../../../application/helpers/history', () => ({
	history: {
		goBack: jest.fn(),
	},
}));

describe('ButtonBack', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<ButtonBack />);
		expect(getByRole('button')).toBeInTheDocument();
	});

	it('should navigate back on click', () => {
		const { getByRole } = render(<ButtonBack />);
		fireEvent.click(getByRole('button'));
		expect(history.goBack).toHaveBeenCalled();
	});
});
