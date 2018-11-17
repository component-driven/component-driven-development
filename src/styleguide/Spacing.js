import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import theme from '../theme';
import Text from '../components/core/Text';
import Panel from '../components/core/Panel';
import Heading from '../components/core/Heading';

const SpacingExample = styled(Panel)`
	padding: 0;
	margin: 0;
	height: ${props => props.space};
	width: 100%;
	font-size: ${props => props.fontSizes};
	font-family: ${props => props.theme.fonts.base};
	background: ${props => props.theme.colors.lighter};
	border-color: ${props => props.theme.colors.light};
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
						<Heading size="l" as="h3">
							{index}
						</Heading>
						<Text variant="tertiary">{space}</Text>
					</SpaceSample>
				))}
			</Box>
		);
	}
}
