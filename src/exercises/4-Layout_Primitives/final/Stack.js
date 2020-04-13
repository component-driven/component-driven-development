import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Grid } from '../../components';

export const Stack = styled(Grid)(
	system({
		numColumns: {
			property: 'gridTemplateColumns',
			transform: value => (value ? `repeat(${value}, 1fr)` : null),
		},
	})
);

Stack.propTypes = {
	...Grid.propTypes,
	/** Number of columns */
	numColumns: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
