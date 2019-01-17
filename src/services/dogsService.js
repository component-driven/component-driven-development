import groupBy from 'lodash/groupBy';
import dogs from '../data/dogs';

const comparators = {
	location: (a, b) => !b || a === b,
	size: (a, b) => !b || a === b,
	rating: (a, b) => a >= b,
};

export function findDogs(query) {
	return new Promise(resolve => {
		setTimeout(() => {
			const fields = Object.keys(query);
			resolve(
				dogs.filter(props =>
					fields.every(field => comparators[field](props[field], query[field]))
				)
			);
		}, 500);
	});
}

export function getDog(id) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(dogs.find(props => props.id === id));
		}, 500);
	});
}

export function getLocations() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Object.keys(groupBy(dogs, 'location')));
		}, 200);
	});
}
