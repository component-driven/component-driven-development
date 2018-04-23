import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../core/Image';

const SIZE = 200;

const Img = styled(Image).attrs({
	width: SIZE,
	height: SIZE,
})`
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
