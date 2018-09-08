import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../core/Image';

const SIZE = 200;

const Img = styled(Image)`
	object-fit: contain;
	max-width: ${SIZE}px;
	width: 100%;
	height: auto;
`;

const DogPhoto = ({ dog: { id, name } }) => (
	<Img src={`images/${id}.jpg`} alt={name} />
);

DogPhoto.propTypes = {
	dog: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
	}),
};

export default DogPhoto;
