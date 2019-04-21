import React from 'react';
import styled from 'styled-components';
import { Swatches, FontSwatch } from './tokens';
import theme from '../theme';

const FontSizeSample = styled.p`
	margin: 0;
	line-height: 1;
	font-size: ${props => props.theme.fontSizes[props.fontSize]};
	font-family: ${props => props.theme.fonts.base};
`;

export default function() {
	return (
		<Swatches items={theme.fontSizes}>
			{(key, value) => (
				<FontSwatch key={key} value={value} token={`fontSizes.${key}`}>
					<FontSizeSample fontSize={key}>{key}</FontSizeSample>
				</FontSwatch>
			)}
		</Swatches>
	);
}
