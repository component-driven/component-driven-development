import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Dog from '../../components/app/Dog';

const Dogs = ({ dogs }) => <div>{dogs.map(dog => <Dog dog={dog} />)}</div>;

Dogs.propTypes = {
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};

export default Dogs;
