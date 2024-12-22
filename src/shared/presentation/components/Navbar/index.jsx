import React, { useState } from 'react';
import { MENU_ICON } from '../../../application/constants/icons';
import Sidebar from '../Sidebar';
import './Navbar.scss';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleShowSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="navbar-container">
			<div className="container-icon" onClick={handleShowSidebar}>
				<i className={`menu-icon ${MENU_ICON}`} />
			</div>
			<h3 className="title">RideOn Store</h3>
			<div style={{ width: '25px' }}></div>
			<Sidebar isOpen={isOpen} onClose={handleShowSidebar} />
		</nav>
	);
};

export default Navbar;
