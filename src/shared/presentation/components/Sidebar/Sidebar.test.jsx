import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from './index';

describe('Sidebar', () => {
	it('should render correctly when open', () => {
		const { getByText } = render(<Sidebar isOpen={true} onClose={jest.fn()} />);
		expect(getByText('New Motorcycles')).toBeInTheDocument();
		expect(getByText('Language')).toBeInTheDocument();
	});

	it('should not render when closed', () => {
		const { container } = render(<Sidebar isOpen={false} onClose={jest.fn()} />);
		expect(container.firstChild).toBeNull();
	});

	it('should call onClose when close button is clicked', () => {
		const onCloseMock = jest.fn();
		const { getByText } = render(<Sidebar isOpen={true} onClose={onCloseMock} />);
		fireEvent.click(getByText('✖'));
		expect(onCloseMock).toHaveBeenCalled();
	});

	it('should apply the "open" class when isOpen is true', () => {
		const { container } = render(<Sidebar isOpen={true} onClose={jest.fn()} />);
		expect(container.firstChild).toHaveClass('open');
	});
});
