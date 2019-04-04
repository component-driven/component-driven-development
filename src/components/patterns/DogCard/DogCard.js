import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import { Link } from '@reach/router';
import Button from '../../core/Button';
import DogInfo from '../../app/DogInfo';
import Card from '../../core/Card';

const DogCard = ({ as, dog }) => (
	<Card as={as}>
		<Card.Image src={`/images/${dog.image}`} alt={dog.name} />
		<Card.Body>
			<Stack gap={4}>
				<DogInfo dog={dog} isHeading />
				<Button as={Link} fullWidth to={`/checkout/${dog.id}`}>
					Rent {dog.name}
				</Button>
			</Stack>
		</Card.Body>
	</Card>
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
