import { findDogs, getLocations, SIZE_MEDIUM } from './dogsService';

describe('findDogs', () => {
	test('filters dogs', async () => {
		const result = await findDogs({
			location: 'Berlin',
			size: SIZE_MEDIUM,
			rating: 3,
		});
		expect(result.every(x => x.location === 'Berlin')).toBe(true);
		expect(result.every(x => x.size === SIZE_MEDIUM)).toBe(true);
		expect(result.every(x => x.rating >= 3)).toBe(true);
	});
});

describe('getLocations', () => {
	test('return locations', async () => {
		const result = await getLocations();
		expect(result).toContain('Berlin');
	});
});
