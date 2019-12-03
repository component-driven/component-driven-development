import React from 'react';
import Box from '../Box';
import Flex from '../Flex';
import Stack from '../Stack';
import { color, border } from 'styled-system';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex)(
	{
		listStyle: 'none',
	},
	color,
	border
);

CardBase.defaultProps = {
	bg: 'background',
	border: 'thin',
	borderColor: 'grey.2',
	borderRadius: 'base',
	flexDirection: 'column',
};

const Cover = React.Fragment;
const Body = Box;
const Footer = Box;

const Card = Macro({ Cover, Body, Footer })(
	({ Cover, Body, Footer }, props) => (
		<CardBase {...props}>
			{Cover}
			<Stack flexGrow={1} p={4} gridGap={4} alignContent="space-between">
				{Body}
				{Footer}
			</Stack>
		</CardBase>
	)
);

export default Card;
