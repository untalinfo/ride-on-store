import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicItem from './CharacteristicItem';
import './CharacteristicItems.scss';

const CharacteristicItems = ({ characteristics }) => {
	return (
		<section className="characteristic-items-container">
			{characteristics.map((characteristic, index) => (
				<CharacteristicItem key={index} characteristic={characteristic} />
			))}
		</section>
	);
};

CharacteristicItems.propTypes = {
	characteristics: PropTypes.array.isRequired,
};

export default CharacteristicItems;
