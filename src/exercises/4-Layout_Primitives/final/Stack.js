import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Flex } from '../../components';

export const Stack = styled(Flex)(
	{
		flexDirection: 'column',
	},
	/*
	 * We are using a "lobotomized owl" CSS selector to add margin between children
	 * More information: https://every-layout.dev/layouts/stack/#the-solution
	 *  */
	system({
		gap: {
			property: '& > * + *', // Here, instead of the CSS property we generate the selector
			scale: 'space',
			transform: (value, scale) => ({ marginTop: scale[value] }), // And here instead of the value for the property we return an object
		},
	})
);

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
