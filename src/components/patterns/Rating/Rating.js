import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../core/Stack';
import Icon from '../../core/Icon';
import VisuallyHidden from '../../core/VisuallyHidden';

const STARS_COUNT = 5;

const range = n => [...Array(n).keys()];

// Round down to the nearest half
const round = x => Math.floor(x * 2) / 2;

const getIcon = (value, index) => {
	const valueRounded = round(value);
	if (valueRounded > index && valueRounded < index + 1) {
		return 'starHalf';
	}
	if (valueRounded > index) {
		return 'star';
	}
	return 'starOutline';
};

const Rating = ({ value }) => {
	return (
		<>
			<VisuallyHidden>
				{value} out of {STARS_COUNT} stars
			</VisuallyHidden>
			<Stack justifyContent="start" gridAutoFlow="column" gridGap={1}>
				{range(STARS_COUNT).map(index => (
					<Icon
						key={index}
						name={getIcon(value, index)}
						variant="rating"
						alt=""
					/>
				))}
			</Stack>
		</>
	);
};

Rating.propTypes = {
	value: PropTypes.number.isRequired,
};

/**
 * Star rating
 */
export default Rating;
