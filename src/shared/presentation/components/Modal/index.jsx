import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

const Modal = ({
	appId,
	isOpen = false,
	onClose,
	contentStyle,
	overlayStyle,
	closeStyle,
	closeTime,
	closeClassName,
	showClose,
	children,
	className,
}) => {
	useEffect(() => {
		const rootElement = document.getElementById('root');
		rootElement && ReactModal.setAppElement(rootElement);
	}, [appId]);

	useEffect(() => {
		let closeTimeout;
		if (closeTime && isOpen) {
			closeTimeout = setTimeout(() => {
				onClose && onClose();
			}, closeTime);
		}

		return () => {
			closeTimeout && clearTimeout(closeTimeout);
		};
	}, [closeTime, isOpen, onClose]);

	const styles = {
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			zIndex: 10,
			...overlayStyle,
		},
		content: {
			backgroundColor: 'white',
			minWidth: '300px',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
			padding: '30px 20px',
			border: 'none',
			...contentStyle,
		},
	};

	const libraryCloseStyles = {
		position: 'absolute',
		top: '10px',
		right: '10px',
		cursor: 'pointer',
		fontSize: '2rem',
		...closeStyle,
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			style={styles}
			contentLabel="Example Modal"
			className={className}
		>
			<React.Fragment>
				{showClose && <i className={`ri-close-line ${closeClassName}`} onClick={onClose} style={libraryCloseStyles}></i>}
				{children}
			</React.Fragment>
		</ReactModal>
	);
};

Modal.defaultProps = {
	appId: 'root',
	isOpen: false,
	overlayStyles: {},
	contentStyles: {},
	closeStyle: {},
	closeClassName: '',
	closeTime: 0,
	showClose: true,
};

Modal.propTypes = {
	appId: PropTypes.string,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	contentStyle: PropTypes.object,
	overlayStyle: PropTypes.object,
	closeStyle: PropTypes.object,
	closeTime: PropTypes.number,
	closeClassName: PropTypes.string,
	showClose: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Modal;
