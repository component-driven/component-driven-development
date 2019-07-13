import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColor = variant => ({ primary: 'bg', secondary: 'primary' }[variant]);
const getBgColor = variant => ({ primary: 'primary' }[variant]);

/**
 * A button.
 */
const Button = styled.button`
	display: ${props => props.fullWidth && 'block'};
	width: ${props => props.fullWidth && '100%'};
	height: 2.5rem;
	padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
	text-align: center;
	border: 1px solid ${props => props.theme.colors.primary};
	border-radius: ${props => props.theme.radii.base};
	font-family: ${props => props.theme.fonts.base};
	font-size: ${props => props.theme.fontSizes.base};
	color: ${props => props.theme.colors[getColor(props.variant)]};
	background-color: ${props =>
		props.theme.colors[getBgColor(props.variant)] || 'transparent'};
	text-decoration: none;
	user-select: none;
	box-sizing: border-box;

	/* We can't use :enabled here because it doesn't work with <a> */
	&:hover:not(:disabled),
	&:active:not(:disabled) {
		border-color: ${props => props.theme.colors.hover};
		background-color: ${props => props.theme.colors.hover};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.colors.focus};
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
	/** Button label */
	children: PropTypes.node,
	/** Button variation */
	variant: PropTypes.oneOf(['primary', 'secondary']),
	fullWidth: PropTypes.bool,
};

Button.defaultProps = {
	variant: 'secondary',
};

/** @component */
export default Button;
