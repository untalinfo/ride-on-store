import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ReadyPage from './index';

describe('ReadyPage Component', () => {
	test('renders without crashing', () => {
		render(<ReadyPage />);
		const titleElement = screen.getByText(/Find a perfect & favorite moto for you./i);
		expect(titleElement).toBeInTheDocument();
	});
	test('handles window resize', () => {
		render(<ReadyPage />);
		const handleResize = jest.fn();
		window.addEventListener('resize', handleResize);
		fireEvent(window, new Event('resize'));
		expect(handleResize).toHaveBeenCalled();
	});
	test('handles window scroll', () => {
		render(<ReadyPage />);
		const handleScroll = jest.fn();
		window.addEventListener('scroll', handleScroll);
		fireEvent(window, new Event('scroll'));
		expect(handleScroll).toHaveBeenCalled();
	});
});
