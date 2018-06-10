import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled, { css } from 'styled-components';

const headingStyles = css`
	font-family: ${props => props.theme.fontFamily.heading};
	font-size: ${props => props.theme.fontSize[props.size]};
	color: ${props => props.theme.color.base};
	font-weight: normal;
`;

/**
 * A text heading.
 */
const Heading = () => {
	return <div className={headingStyles}>Your code here</div>;
};

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxlarge', 'xlarge', 'large', 'base', 'small']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'h1',
	size: 'xxlarge',
};

export default Heading;
