import styled from 'styled-components';
import { themeGet, css } from 'styled-system';

/**
 * A basic input field.
 */
const Input = styled.input`
	${props =>
		css({
			theme: props.theme,
			p: 2,
			fontFamily: 'base',
			fontSize: 'base',
			color: 'base',
			bg: 'bg',
			borderColor: 'primary',
			borderRadius: 'base',
		})};

	box-sizing: border-box;
	display: block;
	width: 100%;
	border-width: 1px;
	border-style: solid;
	/* Remove red outline on required input in Firefox */
	box-shadow: none;

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

/** @component */
export default Input;
