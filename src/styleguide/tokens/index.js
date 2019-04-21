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
	<Stack minWidth={minWidth} gap={gap}>
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

export const SpacingSwatch = ({ name, size, token }) => (
	<SpacingSwatchContainer onClick={() => copy(token)}>
		<SpacingSwatchBox size={size} />
		<SpacingSwatchLabel ml={3}>
			{name}
			<SpacingSwatchSubValue mt={2}>{size}</SpacingSwatchSubValue>
		</SpacingSwatchLabel>
	</SpacingSwatchContainer>
);

SpacingSwatch.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

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

FontSwatch.propTypes = {
	value: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
