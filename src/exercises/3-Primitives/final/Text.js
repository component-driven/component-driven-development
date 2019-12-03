import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, space, variant } from 'styled-system';
import { css } from '@styled-system/css';

/**
 * A component to render all text in the app.
 */
const Text = styled.p(
	// Default styles
	// css function provides access to our design tokens
	css({
		m: 0,
		fontWeight: 'normal',
		fontFamily: 'body',
		fontSize: 'md',
		lineHeight: 'base',
		color: 'base',
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

Text.propTypes = {
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'base',
};

/** @component */
export default Text;
