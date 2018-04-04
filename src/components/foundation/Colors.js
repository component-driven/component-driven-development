import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { darken } from 'polished';
import theme from '../../theme';
import Text from '../core/Text';
import Card from '../core/Card';

const Swatch = styled.div`
	width: 100%;
	height: 100px;
	background: ${props => props.color};
	border-bottom: 1px solid ${props => darken(0.15, props.color)};
	border-top-left-radius: ${props => props.theme.borderRadius.base};
	border-top-right-radius: ${props => props.theme.borderRadius.base};
`;

const ColorSample = ({color, children}) => (
	<Card m={2} p={0} width={1/6}>
		<Swatch color={color} />
		<Box p={2}>
		<Text>{children}</Text>
		<Text tertiary>{color}</Text>
		</Box>
	</Card>
)

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
