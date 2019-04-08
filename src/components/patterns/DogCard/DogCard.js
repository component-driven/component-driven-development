import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Button from '../../core/Button';
import Image from '../../core/Image';
import DogInfo from '../../app/DogInfo';
import Card from '../../core/Card';
import { getUrl } from '../../../urls';

const DogCard = ({ as, dog }) => (
	<Card as={as}>
		<Card.Cover>
			<Image src={getUrl(`/images/${dog.image}`)} alt={dog.name} />
		</Card.Cover>
		<Card.Body>
			<DogInfo dog={dog} isHeading />
		</Card.Body>
		<Card.Footer>
			<Button as={Link} fullWidth to={getUrl(`/checkout/${dog.id}`)}>
				Rent {dog.name}
			</Button>
		</Card.Footer>
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
