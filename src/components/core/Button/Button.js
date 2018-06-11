import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import { text } from '../../../mixins';

/**
 * A button.
 */
const Button = styled(Box).attrs({
	is: 'button',
	px: 3,
	py: 2,
})`
	${props =>
		text({
			color: props.primary ? 'bg' : 'primary',
		})};

	background-color: ${props =>
		props.primary ? props.theme.color.primary : 'transparent'};
	border: 1px solid ${props => props.theme.color.primary};
	border-radius: ${props => props.theme.borderRadius.base};

	&:hover:enabled,
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
	/** Button label */
	children: PropTypes.node,
	/** Button for primary actions */
	primary: PropTypes.bool,
};

/** @component */
export default Button;
