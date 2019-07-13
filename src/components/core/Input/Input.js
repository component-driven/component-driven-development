import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A basic input field.
 */
const Input = styled.input`
	box-sizing: border-box;
	display: block;
	margin: 0;
	width: ${props => props.fullWidth && '100%'};
	height: 2.5rem;
	padding: ${props => props.theme.space[3]};
	border: 1px solid ${props => props.theme.colors.primary};
	border-radius: ${props => props.theme.radii.base};
	font-family: ${props => props.theme.fonts.base};
	font-size: ${props => props.theme.fontSizes.base};
	color: ${props => props.theme.colors.base};
	background-color: ${props => props.theme.colors.bg};

	/* Remove red outline on required input in Firefox */
	box-shadow: none;

	&::placeholder {
		color: ${props => props.theme.colors.secondary};
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.colors.focus};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

Input.propTypes = {
	fullWidth: PropTypes.bool,
};

/** @component */
export default Input;
