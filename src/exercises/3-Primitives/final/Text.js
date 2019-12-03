import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, typography, variant } from 'styled-system';

/**
 * A component to render all text in the app.
 */
const Text = styled.p(
	props =>
		// Defaults
		({
			margin: 0,
			fontWeight: props.theme.fontWeights.normal,
			fontFamily: props.theme.fonts.body,
			fontSize: props.theme.fontSizes.md,
			lineHeight: props.theme.lineHeights.base,
			color: props.theme.colors.text,
			listStyleType: 'none',
			textAlign: props => props.align,
		}),
	// APIs
	color,
	typography,
	space,
	variant({
		variants: {
			base: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'text',
			},
			secondary: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'md',
				color: 'grey.5',
			},
			tertiary: {
				fontWeight: 'normal',
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'sm',
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
