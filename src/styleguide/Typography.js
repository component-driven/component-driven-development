import React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import theme from '../theme';
import Text from '../components/core/Text';

const { fontSizes } = theme;

const FontSizeSample = styled.p`
	margin: 0;
	line-height: 1;
	font-size: ${props => props.fontSize};
	font-family: ${props => props.theme.fonts.base};
`;

const FontSample = ({ fontSize, children }) => (
	<Box mr={3}>
		<FontSizeSample fontSize={fontSize}>
			{children}
			<Text variant="tertiary" as="span">
				{' '}
				— {fontSize}
			</Text>
		</FontSizeSample>
	</Box>
);

const Typography = () => (
	<Box>
		{Object.keys(fontSizes).map(key => (
			<FontSample fontSize={fontSizes[key]} key={key}>
				{key}
			</FontSample>
		))}
	</Box>
);

export default Typography;
