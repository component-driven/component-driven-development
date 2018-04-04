import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { darken } from 'polished';
import theme from '../../theme';
import Text from '../core/Text';

const Swatch = styled(Box).attrs({
	p: 4
})`
	background: ${props => props.color};
	border: 1px solid ${props => darken(0.15, props.color)};
	border-radius: ${props => props.theme.borderRadius.base};
`;

const ColorSample = ({color, children}) => (
	<Box mr={2}>
		<Swatch color={color} />
		<Text>{children}</Text>
		<Text tertiary>{color}</Text>
	</Box>
)

export default class Colors extends React.Component {
	render() {
		const colors = theme.color;
		return (
			<Flex>
				{Object.keys(colors).map(key => (
					<ColorSample color={colors[key]} key={key}>
						{key}
					</ColorSample>
				))}
			</Flex>
		);
	}
}
