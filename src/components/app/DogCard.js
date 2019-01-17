import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import { Box } from '@rebass/grid';
import { Link } from '@reach/router';
import Button from '../core/Button';
import Image from '../core/Image';
import Panel from '../core/Panel';
import DogInfo from './DogInfo';

const DogCard = ({ as, dog, ...props }) => (
	<Panel as={as}>
		<Stack gap={4}>
			<Box mt={-4} ml={-4} mr={-4}>
				<Image src={`/images/${dog.image}`} alt={dog.name} />
			</Box>
			<DogInfo dog={dog} isHeading />
			<Box mt="auto">
				<Button
					as={Link}
					variant="primary"
					fullWidth
					to={`/checkout/${dog.id}`}
				>
					Rent {dog.name}
				</Button>
			</Box>
		</Stack>
	</Panel>
);

DogCard.propTypes = {
	as: PropTypes.string,
	dog: PropTypes.shape({
		image: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		info: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}),
};

export default DogCard;
