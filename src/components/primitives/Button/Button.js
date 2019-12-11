import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';

/**
 * A button.
 */
const Button = styled.button(
	css({
		boxBizing: 'border-box',
		display: 'inline-block',
		height: '2.5rem',
		px: 4,
		py: 3,
		textAlign: 'center',
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'base',
		fontFamily: 'body',
		fontSize: 'md',
		textDecoration: 'none',
		userSelect: 'none',

		// We can't use :enabled here because it doesn't work with <a>
		'&:hover:not(:disabled), &:active:not(:disabled)': {
			borderColor: 'hover',
			backgroundColor: 'hover',
			cursor: 'pointer',
		},

		'&:focus': {
			outline: 0,
			boxShadow: 'focus',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},

		'&::-moz-focus-inner': {
			border: 0,
		},
	}),
	variant({
		variants: {
			primary: {
				color: 'background',
				backgroundColor: 'primary',
			},
			secondary: {
				color: 'primary',
			},
		},
	})
);

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
