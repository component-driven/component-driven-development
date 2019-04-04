import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { readableColor } from 'polished';
import Text from '../components/core/Text';

const Swatch = styled(Box).attrs({ p: 4 })`
	width: 100%;
	height: 100px;
	background: ${props => props.color};

	& > p {
		color: ${props => readableColor(props.color)};
	}
`;

const ColorSample = ({ color, children }) => (
	<Box width={1 / 5}>
		<Swatch color={color}>
			<Text>{children}</Text>
			<Text variant="tertiary">{color}</Text>
		</Swatch>
	</Box>
);

const Colors = ({ theme }) => (
	<Flex flexWrap="wrap">
		{Object.keys(theme.colors).map(key => (
			<ColorSample color={theme.colors[key]} key={key}>
				{key}
			</ColorSample>
		))}
	</Flex>
);

export default Colors;
