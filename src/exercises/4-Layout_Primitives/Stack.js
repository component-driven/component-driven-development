import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Grid } from '../../components';

const Stack = styled(Grid)({
	// Your styles here
});

Stack.propTypes = {
	...Grid.propTypes,
	/** Spacing between items */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
