import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import DogPhoto from '../../components/app/DogPhoto';

const PhotoGrid = ({ items }) => (
	<div>{items.map(dog => <DogPhoto dog={{ id: dog }} />)}</div>
);

PhotoGrid.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
};

export default PhotoGrid;
