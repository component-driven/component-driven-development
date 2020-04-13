import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Grid } from '../../components';

// WORKSHOP_START
const Stack = styled(Grid)({
	// Your styles here
});
// WORKSHOP_END
// FINAL_START
export const Stack = styled(Grid)(
	system({
		numColumns: {
			property: 'gridTemplateColumns',
			transform: value => (value ? `repeat(${value}, 1fr)` : null),
		},
	})
);
// FINAL_END

Stack.propTypes = {
	...Grid.propTypes,
	/** Number of columns */
	numColumns: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
