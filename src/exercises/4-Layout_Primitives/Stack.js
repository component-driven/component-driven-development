import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Flex } from '../../components';

const Stack = styled(Flex)({
	// Your styles here
});

Stack.propTypes = {
	...Flex.propTypes,
	/** Spacing between items */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

/** @component */
export default Stack;
