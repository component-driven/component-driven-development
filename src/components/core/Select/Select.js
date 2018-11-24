import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const ICON =
	'M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z';

const escape = color => color.replace('#', '%23');
const getSvg = color =>
	`%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' height='16'%3E%3Cpath d='${ICON}' fill='${escape(
		color
	)}' /%3E%3C/svg%3E`;

/**
 * A select.
 */
const Select = styled.select`
	appearance: none;
	user-select: none;
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
	background-image: url("data:image/svg+xml,${props =>
		getSvg(props.theme.colors.secondary)}");
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
	value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
};

Select.defaultProps = {};

/** @component */
export default Select;
