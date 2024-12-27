import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick, type = 'button', className = '', leftIcon, rightIcon, children, disabled }) => {
	return (
		<button type={type} className={`button-container ${className}`} onClick={onClick} disabled={disabled}>
			{leftIcon && <i className={leftIcon} />}
			{label || children}
			{rightIcon && <i className={rightIcon} />}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.string,
	leftIcon: PropTypes.string,
	rightIcon: PropTypes.string,
	children: PropTypes.node,
	disabled: PropTypes.bool,
};

export default Button;
