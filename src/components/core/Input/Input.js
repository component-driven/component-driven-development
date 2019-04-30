import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

/**
 * A basic input field.
 */
const Input = styled.input`
	box-sizing: border-box;
	display: block;
	margin: 0;
	width: ${props => props.fullWidth && '100%'};
	height: 2.5rem;
	padding: ${themeGet('space.3')};
	border: 1px solid ${themeGet('colors.primary')};
	border-radius: ${themeGet('radii.base')};
	font-family: ${themeGet('fonts.base')};
	font-size: ${themeGet('fontSizes.base')};
	color: ${themeGet('colors.base')};
	background-color: ${themeGet('colors.bg')};

	/* Remove red outline on required input in Firefox */
	box-shadow: none;

	&::placeholder {
		color: ${themeGet('colors.secondary')};
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
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
