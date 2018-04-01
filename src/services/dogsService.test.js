import findDogs from './dogsService';

it('filters breeds', async () => {
	const result = await findDogs({ barkness: 3, energy: 4, size: 3 });
	expect(result.every(x => x.size === 3)).toBe(true);
	expect(result.every(x => x.lowBarking > 1)).toBe(true);
	expect(result.every(x => x.highEnergy > 3)).toBe(true);
});
