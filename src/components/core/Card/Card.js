import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Stack from '../Stack';
import { color, border, borderColor, borderRadius } from 'styled-system';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex).attrs({
	bg: 'bg',
	border: 'thin',
	borderColor: 'light',
	borderRadius: 'base',
	flexDirection: 'column',
})`
	${color};
	${border};
	${borderColor};
	${borderRadius};
	list-style: none;
`;

const Cover = ({ children }) => children;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <Box mt="auto">{children}</Box>;

const Card = Macro({ Cover, Body, Footer })(
	({ Cover, Body, Footer }, props) => (
		<CardBase {...props}>
			{Cover}
			<Stack height="100%" p={4} gap={4}>
				{Body}
				{Footer}
			</Stack>
		</CardBase>
	)
);

export default Card;
