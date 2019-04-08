import React from 'react';
import PropTypes from 'prop-types';
import Box from '../core/Box';
import Flex from '../core/Flex';
import Stack from '../core/Stack';
import Text from '../core/Text';
import Select from '../core/Select';
import VisuallyHidden from '../core/VisuallyHidden';
import DogCard from '../patterns/DogCard';
import { STATUSES } from '../../consts';

const FilterSelect = ({ name, label, options, value, disabled, onChange }) => (
	<Text as="label">
		<Box mb={2}>{label}</Box>
		<Select
			fullWidth
			disabled={disabled || options.length <= 1}
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
	</Text>
);

const DogFinder = ({
	status,
	filterOptions,
	filters,
	dogs,
	onFilterUpdate,
}) => (
	<React.Fragment>
		<VisuallyHidden as="h3">Filters</VisuallyHidden>
		<Flex mt={3} mb={5} mx={-3} flexWrap="wrap">
			{filterOptions.map(({ name, label, options }) => (
				<Box key={name} width={[1, 1 / 3]} px={3} py={[3, 0]}>
					<FilterSelect
						name={name}
						label={label}
						options={options}
						value={filters[name]}
						disabled={status === STATUSES.LOADING}
						onChange={onFilterUpdate}
					/>
				</Box>
			))}
		</Flex>
		<VisuallyHidden as="h3">
			Search results{' '}
			<span aria-live="polite" role="status">
				({dogs.length} dogs found)
			</span>
		</VisuallyHidden>
		{status === STATUSES.FAILURE && (
			<p aria-live="assertive" role="alert">
				Something went wrong, try again later
			</p>
		)}
		<Stack gap={4} m={0} p={0} flexDirection="row" as="ul">
			{dogs.map(dog => (
				<Box
					key={dog.id}
					width={[1, 1 / 2, 1 / 3, 1 / 6]}
					height="100%"
					as="li"
				>
					<DogCard dog={dog} />
				</Box>
			))}
		</Stack>
	</React.Fragment>
);

DogFinder.propTypes = {
	status: PropTypes.string.isRequired,
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
