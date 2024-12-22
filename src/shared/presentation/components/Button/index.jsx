import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick, type = 'button', className = '', leftIcon, rightIcon }) => {
	return (
		<button type={type} className={`button-container ${className}`} onClick={onClick}>
			{leftIcon && <i className={leftIcon} />}
			<p>{label}</p>
			{rightIcon && <i className={rightIcon} />}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.string,
	leftIcon: PropTypes.element,
	rightIcon: PropTypes.element,
};

export default Button;
