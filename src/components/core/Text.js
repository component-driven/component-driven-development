import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextBase = styled.p`
	margin: 0;
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props =>
		props.theme.fontSize[props.tertiary ? 'small' : 'base']};
	color: ${props =>
		props.theme.color[
			(props.secondary && 'secondary') ||
				(props.tertiary && 'secondary') ||
				(props.error && 'error') ||
				'base'
		]};
`;

const Text = ({ children, is, ...props }) => {
	const Tag = TextBase.withComponent(is);
	return <Tag {...props}>{children}</Tag>;
};

Text.propTypes = {
	is: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
	error: PropTypes.bool,
	children: PropTypes.node,
};

Text.defaultProps = {
	is: 'p',
};

export default Text;
