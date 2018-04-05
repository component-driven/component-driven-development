import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import theme from '../../theme';
import Text from '../core/Text';

const FontSizeSample = styled.p`
	margin: 0;
	font-size: ${props => props.fontSize};
	font-family: ${props => props.theme.fontFamily.base};
`
const FontSample = ({fontSize, children}) => (
	<Box mr={2}>
		<FontSizeSample fontSize={fontSize}>
			{children}
			<Text tertiary is="span"> — {fontSize}</Text>
		</FontSizeSample>
	</Box>
)

export default class Typography extends React.Component {
	render() {
		const sizes = theme.fontSize;
		return (
			<Box>
				{Object.keys(sizes).map(key => (
					<FontSample fontSize={sizes[key]} key={key}>
						{key}
					</FontSample>
				))}
			</Box>
		);
	}
}
