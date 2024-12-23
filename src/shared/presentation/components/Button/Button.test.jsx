import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
	const defaultProps = {
		label: 'Click Me',
		onClick: jest.fn(),
	};

	it('should render button with label', () => {
		const { getByText } = render(<Button {...defaultProps} />);
		expect(getByText('Click Me')).toBeInTheDocument();
	});

	it('should handle button click', () => {
		const { getByText } = render(<Button {...defaultProps} />);
		const button = getByText('Click Me');
		fireEvent.click(button);
		expect(defaultProps.onClick).toHaveBeenCalled();
	});

	it('should render button with left icon', () => {
		const leftIcon = 'left-icon-class';
		const { container } = render(<Button {...defaultProps} leftIcon={leftIcon} />);
		expect(container.querySelector('.left-icon-class')).toBeInTheDocument();
	});

	it('should render button with right icon', () => {
		const rightIcon = 'right-icon-class';
		const { container } = render(<Button {...defaultProps} rightIcon={rightIcon} />);
		expect(container.querySelector('.right-icon-class')).toBeInTheDocument();
	});

	it('should apply custom className', () => {
		const className = 'custom-class';
		const { container } = render(<Button {...defaultProps} className={className} />);
		expect(container.querySelector(`.${className}`)).toBeInTheDocument();
	});
});
