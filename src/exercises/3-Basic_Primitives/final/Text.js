import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, space, variant, layout } from 'styled-system';
import { css } from '@styled-system/css';
import theme from '../../../theme';

/**
 * A component to render all text in the app.
 */
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

Text.propTypes = {
	/** Variants */
	variant: PropTypes.oneOf(Object.keys(theme.textStyles)),
	children: PropTypes.node,
};

/** @component */
export default Text;
