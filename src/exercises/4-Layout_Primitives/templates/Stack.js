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
		gap: {
			property: 'gridGap',
			scale: 'space',
		},
	})
);
// FINAL_END

Stack.propTypes = {
	...Grid.propTypes,
	/** Spacing between items */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
