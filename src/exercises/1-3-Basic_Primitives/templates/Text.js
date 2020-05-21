import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { color, typography, space, variant, layout } from 'styled-system';
import { css } from '@styled-system/css';
import theme from '../../../theme';
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
		margin: 0,
		fontFamily: 'body',
		lineHeight: 'body',
	}),
	// APIs
	color,
	typography,
	space,
	layout,
	variant({
		variants: theme.textStyles,
	})
);
// FINAL_END

Text.propTypes = {
// FINAL_START
	/** Variants */
	variant: PropTypes.oneOf(Object.keys(theme.textStyles)),
// FINAL_END
	children: PropTypes.node,
};

/** @component */
export default Text;
