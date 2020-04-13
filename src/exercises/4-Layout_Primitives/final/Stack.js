import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Grid } from '../../components';

export const Stack = styled(Grid)(
	system({
		gap: {
			property: 'gridGap',
			scale: 'space',
		},
	})
);

Stack.propTypes = {
	...Grid.propTypes,
	/** Spacing between items */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
