import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Card } from '../core/Card';
import { Slider } from '../core/Slider';
import { Widget } from '../core/Widget';
import Dogs from './Dogs';

const SliderColumn = ({ children }) => (
	<Box w={[1, 1 / 3]} px={2} py={[2, 0]}>
		{children}
	</Box>
);

const DogFinder = ({ filters, dogs, onFilterUpdate }) => (
	<React.Fragment>
		<Card mb={3}>
			<Flex mx={-2} my={[-2, 0]} flexWrap="wrap">
				<SliderColumn>
					<Widget label="Size">
						<Slider
							value={filters.size}
							onChange={x => onFilterUpdate('size', x)}
						/>
					</Widget>
				</SliderColumn>
				<SliderColumn>
					<Widget label="Energy">
						<Slider
							value={filters.energy}
							onChange={x => onFilterUpdate('energy', x)}
						/>
					</Widget>
				</SliderColumn>
				<SliderColumn>
					<Widget label="Barkness">
						<Slider
							value={filters.barkness}
							onChange={x => onFilterUpdate('barkness', x)}
						/>
					</Widget>
				</SliderColumn>
			</Flex>
		</Card>
		<Card>
			<Dogs dogs={dogs} />
		</Card>
	</React.Fragment>
);

DogFinder.propTypes = {
	filters: PropTypes.shape({
		size: PropTypes.number.isRequired,
		energy: PropTypes.number.isRequired,
		barkness: PropTypes.number.isRequired,
	}).isRequired,
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	onFilterUpdate: PropTypes.func.isRequired,
};

export default DogFinder;
