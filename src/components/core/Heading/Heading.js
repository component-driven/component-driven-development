import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, space } from 'styled-system';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * A text heading.
 */
const Heading = styled(Base).attrs({
	is: props => props.is,
	m: 0,
})`
	${space};
	line-height: ${themeGet('lineHeights.heading')};
	font-family: ${themeGet('fonts.heading')};
	font-weight: ${themeGet('fontWeights.normal')};
	font-size: ${props => props.theme.fontSizes[props.size]};
	color: ${themeGet('colors.base')};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxl',
};

/** @component */
export default Heading;
