import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import DogPhoto from '../../components/app/DogPhoto';

const Dogs = ({ dogs }) => (
	<div>{dogs.map(dog => <DogPhoto id={dog.id} breed={dog.name} />)}</div>
);

Dogs.propTypes = {
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};

export default Dogs;
