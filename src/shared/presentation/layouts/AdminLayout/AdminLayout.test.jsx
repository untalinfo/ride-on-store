import React from 'react';
import { render } from '@testing-library/react';
import AdminLayout from './index';

jest.mock('../../components/BottomMenu', () => () => <div>BottomMenu</div>);

describe('AdminLayout', () => {
	it('should render children correctly', () => {
		const { getByText } = render(
			<AdminLayout>
				<div>Test Child</div>
			</AdminLayout>,
		);
		expect(getByText('Test Child')).toBeInTheDocument();
	});

	it('should render BottomMenu', () => {
		const { getByText } = render(<AdminLayout />);
		expect(getByText('BottomMenu')).toBeInTheDocument();
	});
});
