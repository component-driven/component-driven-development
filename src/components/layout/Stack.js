import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { Flex } from '../';

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
			// And here instead of the value for the property we return an object
			// We need to add important since we set margin: 0 in our components
			// and we need to override it
			transform: (value, scale) => ({ marginTop: `${scale[value]}!important` }),
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
