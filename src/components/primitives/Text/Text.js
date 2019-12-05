import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, space, layout, variant } from 'styled-system';
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
		color: 'text',
	}),
	// APIs
	color,
	typography,
	space,
	layout,
	variant({
		variants: {
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
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Variation */
	variant: PropTypes.oneOf(['secondary', 'tertiary', 'error']),
	children: PropTypes.node,
};

/** @component */
export default Text;
