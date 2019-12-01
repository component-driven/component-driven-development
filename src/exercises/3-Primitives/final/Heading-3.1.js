import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h1`
	margin: 0;
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

/** @component */
export default Heading;
