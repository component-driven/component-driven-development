import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

/**
 * A text heading.
 */
const Heading = styled.h1`
	margin: 0;
	${space};
	line-height: ${props => props.theme.lineHeights.heading};
	font-weight: ${props => props.theme.fontWeights.normal};
	font-family: ${props => props.theme.fonts.heading};
	font-size: ${props => props.theme.fontSizes[props.size]};
	color: ${props => props.theme.colors.base};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xl', 'lg', 'md']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	size: 'xl',
};

/** @component */
export default Heading;
