import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { space, color, typography, variant } from 'styled-system';
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
// FINAL_END

Text.propTypes = {
	// FINAL_START
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	// FINAL_END
	children: PropTypes.node,
};

Text.defaultProps = {
	// FINAL_START
	variant: 'base',
	// FINAL_END
};

/** @component */
export default Text;
