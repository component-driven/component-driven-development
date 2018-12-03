import { findDogs, getLocations } from './dogsService';
import { SIZES } from '../consts';

describe('findDogs', () => {
	test('filters dogs', async () => {
		const result = await findDogs({
			location: 'Berlin',
			size: SIZES.MEDIUM,
			rating: 3,
		});
		expect(result.every(x => x.location === 'Berlin')).toBe(true);
		expect(result.every(x => x.size === SIZES.MEDIUM)).toBe(true);
		expect(result.every(x => x.rating >= 3)).toBe(true);
	});
});

describe('getLocations', () => {
	test('return locations', async () => {
		const result = await getLocations();
		expect(result).toContain('Berlin');
	});
});
