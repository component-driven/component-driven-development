import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Box } from '../../components';

const Stack = styled(Box)({
	// Your styles here
});

Stack.propTypes = {
	...Box.propTypes,
	/** Spacing between items */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

/** @component */
export default Stack;
