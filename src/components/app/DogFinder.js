import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import Slider from '../core/Slider';
import Widget from '../core/Widget';
import Dogs from './Dogs';

const SliderColumn = ({ children }) => (
	<Box width={[1, 1 / 3]} px={3} py={[3, 0]}>
		{children}
	</Box>
);

const DogFinder = ({ filters, dogs, onFilterUpdate }) => (
	<React.Fragment>
		<Flex mt={3} mb={5} mx={-3} flexWrap="wrap">
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
		<Dogs dogs={dogs} />
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
