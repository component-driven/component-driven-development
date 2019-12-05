import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Grid from '../Grid';

const px = value => (typeof value === 'number' ? `${value}px` : value);

const getMinMaxValue = (value, scale = []) => px(scale[value] || value);

export const Stack = styled(Grid)(
	system({
		minColumnWidth: {
			property: 'gridTemplateColumns',
			scale: 'space',
			transform: (value, scale) =>
				value
					? `repeat(auto-fit, minmax(${getMinMaxValue(value, scale)}, 1fr))`
					: null,
		},
		numColumns: {
			property: 'gridTemplateColumns',
			transform: value => (value ? `repeat(${value}, 1fr)` : null),
		},
	})
);

Stack.propTypes = {
	...Grid.propTypes,
	/** Minimum column per item */
	minColumnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/** Number of columns */
	numColumns: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
