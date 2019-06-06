import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { getDownArrowIcon } from './icons';

/**
 * A select.
 */
const Select = styled.select`
	appearance: none;
	user-select: none;
	width: ${props => props.fullWidth && '100%'};
	height: 2.5rem;
	padding-top: ${themeGet('space.3')};
	padding-right: ${themeGet('space.5')};
	padding-bottom: ${themeGet('space.3')};
	padding-left: ${themeGet('space.3')};
	border: 1px solid ${themeGet('colors.primary')};
	border-radius: ${themeGet('radii.base')};
	font-family: ${themeGet('fonts.base')};
	font-size: ${themeGet('fontSizes.base')};
	color: ${themeGet('colors.base')};
	background-color: ${themeGet('colors.bg')};

	/* Down arrow icon */
	background-image: ${props => getDownArrowIcon(props.theme.colors.secondary)};
	background-position: center right ${themeGet('space.3')};
	background-repeat: no-repeat;

	&:hover:enabled,
	&:active:enabled,
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${themeGet('colors.focus')};
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
