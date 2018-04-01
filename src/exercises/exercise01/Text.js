import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to render all text in the app.
 */
const Text = () => {
	return <div>Your code here</div>;
};

Text.propTypes = {
	/** Custom component or HTML tag */
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	/** Less important text */
	secondary: PropTypes.bool,
	/** Small copy */
	tertiary: PropTypes.bool,
	/** Error message */
	error: PropTypes.bool,
	children: PropTypes.node,
};

Text.defaultProps = {
	is: 'p',
	secondary: false,
	tertiary: false,
	error: false,
};

export default Text;
