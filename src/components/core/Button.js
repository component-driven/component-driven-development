import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';

/**
 * A button.
 */
const Button = styled(Box).attrs({
	is: 'button',
	px: 3,
	py: 2,
})`
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props => props.theme.fontSize.base};
	color: ${props => props.theme.color.bg};
	background-color: ${props => props.theme.color.primary};
	border: 1px solid ${props => props.theme.color.primary};
	border-radius: ${props => props.theme.borderRadius.base};

	&:hover:not(:disabled),
	&:active {
		border-color: ${props => props.theme.color.hover};
		background-color: ${props => props.theme.color.hover};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.color.focus};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

Button.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Button;
