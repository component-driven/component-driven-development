import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import theme from '../../theme';
import Text from '../core/Text';
import Card from '../core/Card';

const SpacingExample = styled(Card)`
	padding: 0;
	height: ${props => props.space}px;
	margin: 0;
	font-size: ${props => props.fontSize};
	font-family: ${props => props.theme.fontFamily.base};
	background: ${props => props.theme.color.light};
	border: none;
`;
const SpaceSample = ({ space, children }) => <Box m={0}>
	<SpacingExample space={space}/>
	<Text tertiary>{children}</Text>
</Box>;

export default class Spacing extends React.Component {
	render() {
		return (
			<Box>
				{theme.space.map(space => (
					<SpaceSample space={space} key={space}>
						{space}
					</SpaceSample>
				))}
			</Box>
		);
	}
}
