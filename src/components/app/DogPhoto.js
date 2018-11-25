import React from 'react';
import PropTypes from 'prop-types';
import Image from '../core/Image';

const Img = styled(Image)`
	max-width: 100%;
	width: 100%;
	height: auto;
`;

const DogPhoto = ({ dog: { image, name } }) => (
	<Img src={`images/${image}`} alt={name} />
);

DogPhoto.propTypes = {
	dog: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
};

export default DogPhoto;
