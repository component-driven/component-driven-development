import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SIZE = 200;

const Img = styled.img`
	width: ${SIZE}px;
	height: ${SIZE}px;
	object-fit: contain;
`;

const DogPhoto = ({ id, breed }) => (
	<Img src={`http://www.dogbreedchart.com/img/${id}.jpg`} alt={breed} />
);

DogPhoto.propTypes = {
	id: PropTypes.string,
	breed: PropTypes.string,
};

export default DogPhoto;
