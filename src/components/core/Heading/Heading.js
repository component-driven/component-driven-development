import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

/**
 * A text heading.
 */
const HeadingBase = styled.h1`
	${space};
	line-height: ${props => props.theme.lineHeights.heading};
	font-family: ${props => props.theme.fonts.heading};
	font-weight: ${props => props.theme.headingFontWeights[props.size]};
	font-size: ${props => props.theme.fontSizes[props.size]};
	color: ${props => props.theme.colors.base};
	text-align: ${props => props.align};
`;

// Apply default props manually, because styled-system will apply them after
// passed props, so default m prop will overwrite passed mb prop for example
const Heading = props => <HeadingBase {...Heading.defaultProps} {...props} />;

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xl', 'l', 'm', 'base']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	m: 0,
	size: 'xl',
};

/** @component */
export default Heading;
