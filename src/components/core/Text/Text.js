import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const getFontSize = variant =>
	({
		base: 'm',
		secondary: 'm',
		tertiary: 's',
		error: 'm',
	}[variant]);
const getColor = variant =>
	({
		base: 'base',
		secondary: 'secondary',
		tertiary: 'secondary',
		error: 'error',
	}[variant]);

/**
 * A component to render all text in the app.
 */
const Text = styled.p`
	margin: 0;
	font-weight: normal;
	line-height: ${themeGet('lineHeights.base')};
	font-family: ${themeGet('fonts.base')};
	font-size: ${props => props.theme.fontSizes[getFontSize(props.variant)]};
	color: ${props => props.theme.colors[getColor(props.variant)]};
`;

Text.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'base',
};

export default Text;
