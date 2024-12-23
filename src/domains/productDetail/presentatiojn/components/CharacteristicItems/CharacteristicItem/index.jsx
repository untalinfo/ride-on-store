import React from 'react';
import PropTypes from 'prop-types';
import './CharacteristicItem.scss';

const CharacteristicItem = ({ characteristic }) => {
	return (
		<div className="characteristic-item-container">
			<div className="characteristic-img">
				<img src={characteristic.img} alt="" className="img" />
			</div>
			<p>{characteristic.name}</p>
		</div>
	);
};

CharacteristicItem.propTypes = {
	characteristic: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	}).isRequired,
};

export default CharacteristicItem;
