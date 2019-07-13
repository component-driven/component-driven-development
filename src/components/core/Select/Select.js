import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDownArrowIcon } from './icons';

/**
 * A select.
 */
const Select = styled.select`
	appearance: none;
	user-select: none;
	width: ${props => props.fullWidth && '100%'};
	height: 2.5rem;
	padding-top: ${props => props.theme.space[3]};
	padding-right: ${props => props.theme.space[5]};
	padding-bottom: ${props => props.theme.space[3]};
	padding-left: ${props => props.theme.space[3]};
	border: 1px solid ${props => props.theme.colors.primary};
	border-radius: ${props => props.theme.radii.base};
	font-family: ${props => props.theme.fonts.base};
	font-size: ${props => props.theme.fontSizes.base};
	color: ${props => props.theme.colors.base};
	background-color: ${props => props.theme.colors.bg};

	/* Down arrow icon */
	background-image: ${props => getDownArrowIcon(props.theme.colors.secondary)};
	background-position: center right ${props => props.theme.space[3]};
	background-repeat: no-repeat;

	&:hover:enabled,
	&:active:enabled,
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.colors.focus};
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

Select.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fullWidth: PropTypes.bool,
	disabled: PropTypes.bool,
};

Select.defaultProps = {};

/** @component */
export default Select;
