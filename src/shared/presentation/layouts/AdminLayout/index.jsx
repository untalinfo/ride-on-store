import React from 'react';
import { PropTypes } from 'prop-types';
import './AdminLayout.scss';
import BottomMenu from '../../components/BottomMenu';
import Sidebar from '../../components/Sidebar';

const AdminLayout = ({ children }) => {
	return (
		<main className="admin-layout-container">
			<Sidebar isOpen={true} />
			<section className="section-container">{children}</section>
			<BottomMenu />
		</main>
	);
};

AdminLayout.propTypes = {
	children: PropTypes.node,
};

export default AdminLayout;
