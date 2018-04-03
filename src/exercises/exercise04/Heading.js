import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';

/**
 * A text heading.
 */
const Heading = () => {
	return <div>Your code here</div>;
};

Heading.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'])
		.isRequired,
	children: PropTypes.node,
};

Heading.defaultProps = {
	is: 'div',
};

export default Heading;
