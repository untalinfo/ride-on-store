import React from 'react';
import './ButtonBack.scss';
import { history } from '../../../application/helpers/history';
import { ARROW_LEFT_ICON } from '../../../application/constants/icons';

const ButtonBack = () => {
	const handleBackClick = () => {
		history.goBack();
	};

	return (
		<button className="button-back" onClick={handleBackClick}>
			<i className={ARROW_LEFT_ICON} />
		</button>
	);
};

export default ButtonBack;
