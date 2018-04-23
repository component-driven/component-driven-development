import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SIZE = 200;

const Img = styled.img`
	width: ${SIZE}px;
	height: ${SIZE}px;
	object-fit: contain;
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
