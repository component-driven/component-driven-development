import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import Select from '../core/Select';
import Widget from '../core/Widget';
import CardList from './CardList';
import DogCard from './DogCard';

const FilterSelect = ({ name, options, value, onChange }) => (
	<Select
		fullWidth
		disabled={options.length === 1}
		value={value}
		onChange={event => {
			const { value } = event.target;
			const number = Number(value);
			onChange(name, String(number) === value ? number : value);
		}}
	>
		{options.map(option => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		))}
	</Select>
);

const DogFinder = ({ filterOptions, filters, dogs, onFilterUpdate }) => (
	<React.Fragment>
		<Flex mt={3} mb={5} mx={-3} flexWrap="wrap">
			{filterOptions.map(({ name, label, options }) => (
				<Box key={name} width={[1, 1 / 3]} px={3} py={[3, 0]}>
					<Widget label={label}>
						<FilterSelect
							name={name}
							options={options}
							value={filters[name]}
							onChange={onFilterUpdate}
						/>
					</Widget>
				</Box>
			))}
		</Flex>
		<CardList>
			{dogs.map(dog => (
				<DogCard key={dog.id} dog={dog} as="li" />
			))}
		</CardList>
	</React.Fragment>
);

DogFinder.propTypes = {
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			options: PropTypes.arrayOf(
				PropTypes.shape({
					value: PropTypes.any,
					label: PropTypes.string.isRequired,
				})
			),
		})
	),
	filters: PropTypes.shape({
		location: PropTypes.string,
		size: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}).isRequired,
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			breed: PropTypes.string.isRequired,
			info: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			size: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
	onFilterUpdate: PropTypes.func.isRequired,
};

export default DogFinder;
