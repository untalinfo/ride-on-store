import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './index';

jest.mock('../Sidebar', () => {
	// eslint-disable-next-line react/prop-types
	const Sidebar = ({ isOpen }) => (isOpen ? <div>Sidebar</div> : null);
	return Sidebar;
});

describe('Navbar', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Navbar />);
		expect(getByText('RideOn Store')).toBeInTheDocument();
	});

	it('should toggle sidebar on menu icon click', () => {
		const { getByText, queryByText } = render(<Navbar />);
		const menuIcon = getByText('RideOn Store').previousSibling;
		fireEvent.click(menuIcon);
		expect(getByText('Sidebar')).toBeInTheDocument();
		fireEvent.click(menuIcon);
		expect(queryByText('Sidebar')).not.toBeInTheDocument();
	});
});
