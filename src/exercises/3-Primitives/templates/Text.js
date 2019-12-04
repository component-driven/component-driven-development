import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { color, typography, space, variant } from 'styled-system';
import { css } from '@styled-system/css';
// FINAL_END

/**
 * A component to render all text in the app.
 */
// WORKSHOP_START
const Text = styled.p({
	// Your styles here
});
// WORKSHOP_END
// FINAL_START
const Text = styled.p(
	// Default styles
	// css function provides access to our design tokens
	css({
		m: 0,
		fontWeight: 'normal',
		fontFamily: 'body',
		fontSize: 'md',
		lineHeight: 'base',
		color: 'text',
	}),
	// APIs
	color,
	typography,
	space,
	variant({
		variants: {
			base: {
				fontSize: 'md', // You can use design tokens in variants!
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				color: 'text',
			},
			secondary: {
				fontSize: 'md',
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				color: 'grey.5',
			},
			tertiary: {
				fontSize: 'sm',
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				color: 'grey.5',
			},
			error: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'error',
			},
		},
	})
);
// FINAL_END

Text.propTypes = {
// FINAL_START
	/** Variation */
	variant: PropTypes.oneOf(['secondary', 'tertiary', 'error']),
// FINAL_END
	children: PropTypes.node,
};

/** @component */
export default Text;
