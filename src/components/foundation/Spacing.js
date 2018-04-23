import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import theme from '../../theme';
import Text from '../core/Text';
import Panel from '../core/Panel';
import Heading from '../core/Heading';

const SpacingExample = styled(Panel)`
	padding: 0;
	margin: 0;
	height: ${props => props.space}px;
	width: 100%;
	font-size: ${props => props.fontSize};
	font-family: ${props => props.theme.fontFamily.base};
	background: ${props => props.theme.color.lighter};
	border-color: ${props => props.theme.color.light};
	border-style: dashed;
`;

const SpaceSample = ({ space, children }) => (
	<Flex mb={3}>
		<Box width={theme.space[6]}>{children}</Box>
		<SpacingExample space={space} />
	</Flex>
);

export default class Spacing extends React.Component {
	render() {
		return (
			<Box>
				{theme.space.map((space, index) => (
					<SpaceSample space={space} key={space}>
						<Heading size="delta" is="h3">
							{index}
						</Heading>
						<Text tertiary>{space}px</Text>
					</SpaceSample>
				))}
			</Box>
		);
	}
}
