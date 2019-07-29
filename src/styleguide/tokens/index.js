import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { readableColor } from 'polished';
import Box from '../../components/core/Box';
import Stack from 'stack-styled';
import copy from 'clipboard-copy';

/*
 * Components to showcase design tokens, should be extracted to a new package
 */

export const Swatches = ({ items, minWidth, gap, renderItem }) => (
	<Stack minColumnWidth={minWidth} gridGap={gap}>
		{Array.isArray(items)
			? items.map((value, index) => renderItem(index, value))
			: Object.keys(items).map(key => renderItem(key, items[key]))}
	</Stack>
);

Swatches.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	minWidth: PropTypes.number,
	gap: PropTypes.number,
	renderItem: PropTypes.func.isRequired,
};

Swatches.defaultProps = {
	layout: 'grid',
	gap: 4,
};

const ColorSwatchContainer = styled(Box).attrs({ as: 'button', p: 4 })`
	font: inherit;
	text-align: center;
	border: 0;
	background-color: ${props => props.color};
	color: ${props =>
		readableColor(
			props.color,
			'rgba(0, 0, 0, 0.85)',
			'rgba(255, 255, 255, 0.85)'
		)};

	&:hover,
	&:active,
	&:focus {
		outline: 0;
		box-shadow: inset 0px 0px 0px 2px
			${props =>
				readableColor(
					props.color,
					'rgba(0, 0, 0, 0.5)',
					'rgba(255, 255, 255, 0.7)'
				)};
		cursor: pointer;
	}
`;

export const ColorSwatch = ({ name, color, token }) => (
	<ColorSwatchContainer color={color} onClick={() => copy(token)}>
		{name}
	</ColorSwatchContainer>
);

ColorSwatch.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

const SpacingSwatchContainer = styled.button`
	display: flex;
	align-items: flex-end;
	padding: 1rem;
	font: inherit;
	border: 0;
	background: none;
	text-align: left;
	line-height: 1;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
		background: #efefef;
	}
`;

const SpacingSwatchBox = styled.div`
	width: ${props => (props.size === 0 ? '1px' : props.size)};
	height: ${props => (props.size === 0 ? '1px' : props.size)};
	border: 1px dashed #888;
	box-sizing: initial;
`;

const SwatchLabel = styled(Box)`
	min-width: 12rem;
`;

const SwatchSubValue = styled(Box)`
	color: #767676;
	font-size: 0.85rem;
`;

export const SpacingSwatch = ({ name, size, token }) => (
	<SpacingSwatchContainer onClick={() => copy(token)}>
		<SwatchLabel mr={4}>
			{name}
			<SwatchSubValue mt={2}>{size}</SwatchSubValue>
		</SwatchLabel>
		<SpacingSwatchBox size={size} />
	</SpacingSwatchContainer>
);

SpacingSwatch.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

const FontSwatchContainer = styled.button`
	display: flex;
	align-items: center;
	padding: 0.25rem 0.5rem;
	font: inherit;
	border: 0;
	background: none;
	text-align: left;
	line-height: 1;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
		background: #efefef;
	}
`;

export const FontSwatch = ({ name, value, token, children }) => (
	<FontSwatchContainer onClick={() => copy(token)}>
		<SwatchLabel mr={4}>
			{name}
			<SwatchSubValue mt={2}>{value}</SwatchSubValue>
		</SwatchLabel>
		{children}
	</FontSwatchContainer>
);

FontSwatch.propTypes = {
	value: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
