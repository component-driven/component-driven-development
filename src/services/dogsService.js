import groupBy from 'lodash/groupBy';
import dogs from '../data/dogs';
export { SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE } from '../data/dogs';

const comparators = {
	location: (a, b) => !b || a === b,
	size: (a, b) => !b || a === b,
	rating: (a, b) => a >= b,
};

export function findDogs(query) {
	const fields = Object.keys(query);
	return Promise.resolve(
		dogs.filter(props =>
			fields.every(field => comparators[field](props[field], query[field]))
		)
	);
}

export function getLocations() {
	return Promise.resolve(Object.keys(groupBy(dogs, 'location')));
}
