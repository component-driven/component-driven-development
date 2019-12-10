import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';

/**
 * A basic input field.
 */
const Input = styled.input(
	{
		width: props => props.fullWidth && '100%',
	},
	css({
		boxSizing: 'border-box',
		display: 'block',
		margin: 0,
		height: '2.5rem',
		padding: 3,
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'base',
		fontFamily: 'body',
		fontSize: 'md',
		color: 'text',
		backgroundColor: 'background',
		// Remove red outline on required input in Firefox
		boxShadow: 'none',

		'&::placeholder': {
			color: 'secondary',
		},

		'&:focus': {
			outline: 0,
			boxShadow: 'focus',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	})
);

Input.propTypes = {
	fullWidth: PropTypes.bool,
};

/** @component */
export default Input;
