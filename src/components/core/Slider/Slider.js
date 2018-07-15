import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const thumbSize = 12;

const thumbStyles = css`
	box-sizing: border-box;
	width: ${thumbSize}px;
	height: ${thumbSize}px;
	cursor: pointer;
	border-radius: 50%;
	border: 3px solid ${props => props.theme.colors.primary};
	background-color: ${props => props.theme.colors.bg};
`;

const trackStyles = css`
	box-sizing: border-box;
	width: 100%;
	height: 4px;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.primary};
`;

const Input = styled.input`
	box-sizing: border-box;
	width: 100%;
	margin: 0;
	-webkit-appearance: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		margin-top: -4px;
		${thumbStyles};
	}
	&::-moz-range-thumb {
		${thumbStyles};
	}
	&::-ms-thumb {
		${thumbStyles};
	}

	&::-webkit-slider-runnable-track {
		${trackStyles};
	}
	&::-moz-range-track {
		${trackStyles};
	}
	&::-ms-track {
		${trackStyles};
	}
`;

/**
 * A slider.
 */
function Slider({ value, onChange }) {
	return (
		<Input
			type="range"
			min={1}
			max={5}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	);
}

Slider.propTypes = {
	value: PropTypes.oneOf([1, 2, 3, 4, 5]),
	onChange: PropTypes.func,
};

export default Slider;
