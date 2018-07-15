import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, css } from 'styled-system';

/**
 * A button.
 */
const Button = styled.button`
	${({ theme, variation }) =>
		css({
			theme,
			px: 3,
			py: 2,
			fontFamily: 'base',
			fontSize: 'base',
			color: { primary: 'bg', secondary: 'primary' }[variation],
			bg: { primary: 'primary' }[variation],
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
	/** Button variation */
	variation: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
	variation: 'secondary',
};

/** @component */
export default Button;
