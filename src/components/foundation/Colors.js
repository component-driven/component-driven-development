import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { readableColor } from 'polished';
import theme from '../../theme';
import Text from '../core/Text';

const Swatch = styled(Box).attrs({ p: 3 })`
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
			<Text tertiary>{color}</Text>
		</Swatch>
	</Box>
);

export default class Colors extends React.Component {
	render() {
		const colors = theme.color;
		return (
			<Flex flexWrap="wrap">
				{Object.keys(colors).map(key => (
					<ColorSample color={colors[key]} key={key}>
						{key}
					</ColorSample>
				))}
			</Flex>
		);
	}
}
