import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Base = ({ is: Component, ...props }) => <Component {...props} />;

/**
 * A component to render all text in the app.
 */
const Text = styled(Base)`
	margin: 0;
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props =>
		props.theme.fontSize[props.tertiary ? 'small' : 'base']};
	font-weight: normal;
	color: ${props =>
		props.theme.color[
			(props.secondary && 'secondary') ||
				(props.tertiary && 'secondary') ||
				(props.error && 'error') ||
				'base'
		]};
`;

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
