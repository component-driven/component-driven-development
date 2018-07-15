import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, css } from 'styled-system';

/**
 * A button.
 */
const Button = styled.button`
	${props =>
		css({
			theme: props.theme,
			px: 3,
			py: 2,
			fontFamily: 'base',
			fontSize: 'base',
			color: props.primary ? 'bg' : 'primary',
			bg: props.primary ? 'primary' : undefined,
			borderColor: 'primary',
			borderRadius: 'base',
		})};

	border-width: 1px;
	border-style: solid;
	user-select: none;

	&:hover:enabled,
	&:active {
		border-color: ${themeGet('colors.hover')};
		background-color: ${themeGet('colors.hover')};
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
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
	/** Button for primary actions */
	primary: PropTypes.bool,
};

/** @component */
export default Button;
