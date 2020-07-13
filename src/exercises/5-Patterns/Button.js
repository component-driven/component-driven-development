import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
	padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
	color: ${props => props.theme.colors.background};
	background-color: ${props => props.theme.colors.primary};
	border: 0;
	border-radius: ${props => props.theme.radii.round};
`;

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
	/** Button variation */
	variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
	variant: 'secondary',
};

/** @component */
export default Button;
