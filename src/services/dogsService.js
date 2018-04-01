import sampleSize from 'lodash/sampleSize';
import breeds from '../data/dogs.json';

const MAX_RESULTS = 6;

const accessors = {
	barkness: props => 5 - props.lowBarking,
	energy: props => props.highEnergy,
	size: props => props.size,
};

const comparators = {
	barkness: (a, b) => a <= b,
	energy: (a, b) => a >= b,
	size: (a, b) => a === b,
};

export default function findDogs(query) {
	const fields = Object.keys(query);
	return Promise.resolve(
		sampleSize(
			breeds.filter(props =>
				fields.every(field =>
					comparators[field](accessors[field](props), query[field])
				)
			),
			MAX_RESULTS
		)
	);
}
