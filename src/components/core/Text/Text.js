import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

const textStyle = variant({
	key: 'textStyles',
});

/**
 * A component to render all text in the app.
 */
const Text = styled.p`
	margin: 0;
	font-weight: normal;
	line-height: ${props => props.theme.lineHeights.base};
	font-family: ${props => props.theme.fonts.base};
	text-align: ${props => props.align};
	list-style-type: none;
	${textStyle};
`;

Text.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Variation */
	variant: PropTypes.oneOf(['base', 'secondary', 'tertiary', 'error']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
};

Text.defaultProps = {
	variant: 'base',
};

/** @component */
export default Text;
