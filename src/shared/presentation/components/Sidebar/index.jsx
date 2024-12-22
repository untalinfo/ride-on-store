import React from 'react';
import { PropTypes } from 'prop-types';
import './Sidebar.scss';
import {
	FACEBOOK_ICON,
	TAG_PRICE_ICON,
	TRANSLATE_ICON,
	TWITTER_ICON,
	YOUTUBE_ICON,
} from '../../../application/constants/icons';

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			{/* Botón para cerrar el Sidebar */}
			<button className={'close-button'} onClick={onClose}>
				✖
			</button>

			{/* Opciones del Sidebar */}
			<div className={'menu'}>
				<p className={'menu-item'}>
					<i className={TAG_PRICE_ICON}></i>
					New Motorcycles
				</p>
				<p className={'menu-item'}>
					<i className={TRANSLATE_ICON}></i>
					Language
				</p>
			</div>

			{/* Íconos de Redes Sociales */}
			<div className={'social-icons'}>
				<a href="#" className={'icon-link'}>
					<i className={FACEBOOK_ICON}></i>
				</a>
				<a href="#" className={'icon-link'}>
					<i className={YOUTUBE_ICON}></i>
				</a>
				<a href="#" className={'icon-link'}>
					<i className={TWITTER_ICON}></i>
				</a>
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Sidebar;
