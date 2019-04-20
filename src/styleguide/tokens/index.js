import React from 'react';
import styled from 'styled-components';
import { readableColor } from 'polished';
import Box from '../../components/core/Box';
import Stack from 'stack-styled';
import copy from 'clipboard-copy';

/*
 * Components to showcase design tokens, should be extracted to a new package
 */

export const Swatches = ({ items, layout, children }) => (
	<Stack minWidth={layout === 'grid' && 150} gap={layout === 'grid' ? 2 : 4}>
		{Array.isArray(items)
			? items.map((value, index) => children(index, value))
			: Object.keys(items).map(key => children(key, items[key]))}
	</Stack>
);

Swatches.defaultProps = {
	layout: 'grid',
};

const ColorSwatchContainer = styled(Box).attrs({ as: 'button', p: 4 })`
	min-height: 100px;
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
		outline: 2px dashed #333;
		cursor: pointer;
	}
`;

export const ColorSwatch = ({ name, color, token }) => (
	<ColorSwatchContainer color={color} onClick={() => copy(token)}>
		{name}
	</ColorSwatchContainer>
);

const SpacingSwatchContainer = styled.button`
	display: flex;
	padding: 0;
	font: inherit;
	border: 0;
	background: none;
	text-align: left;
	line-height: 1;

	&:hover,
	&:active,
	&:focus {
		outline: 2px dashed #333;
		outline-offset: 2px;
		cursor: pointer;
	}
`;

const SpacingSwatchBox = styled.div`
	width: 100%;
	height: ${props => (props.size === 0 ? '1px' : props.size)};
	background-color: ${props => (props.size === 0 ? '#efefef' : '#ccc')};
`;

const SpacingSwatchLabel = styled(Box)`
	min-width: 5rem;
`;

const SpacingSwatchSubValue = styled(Box)`
	color: #767676;
	font-size: 0.85rem;
`;

export const SpacingSwatch = ({ name, size, token, children }) => (
	<SpacingSwatchContainer onClick={() => copy(token)}>
		<SpacingSwatchBox size={size} />
		<SpacingSwatchLabel ml={3}>
			{name}
			<SpacingSwatchSubValue mt={2}>{size}</SpacingSwatchSubValue>
		</SpacingSwatchLabel>
	</SpacingSwatchContainer>
);

const FontSwatchContainer = styled.button`
	display: flex;
	align-items: baseline;
	padding: 0;
	font: inherit;
	border: 0;
	background: none;
	text-align: left;
	line-height: 1;

	&:hover,
	&:active,
	&:focus {
		outline: 2px dashed #333;
		outline-offset: 2px;
		cursor: pointer;
	}
`;

const FontSwatchLabel = styled(Box)`
	color: #767676;
	font-size: 0.85rem;
`;

export const FontSwatch = ({ value, token, children }) => (
	<FontSwatchContainer onClick={() => copy(token)}>
		{children}
		<FontSwatchLabel ml={3}>{value}</FontSwatchLabel>
	</FontSwatchContainer>
);
