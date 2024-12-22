import React from 'react';
import './BottomMenu.scss';
import { homeRoute } from '../../../infrastructure/routing/routes';
import { history } from '../../../application/helpers/history';

const BottomMenu = () => {
	const handleRedirectHome = () => {
		history.push(homeRoute);
	};
	return (
		<nav className="bottom-menu-container">
			<div className="menu-item" onClick={handleRedirectHome}>
				<img className="icon" src="/src/shared/application/constants/imgs/home-icon.svg" alt="" />
				Home
			</div>
		</nav>
	);
};

export default BottomMenu;
