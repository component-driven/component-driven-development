import React from 'react';
import Flex from '../../components/core/Flex';
import Box from '../../components/core/Box';
import Stack from '../../components/core/Stack';
import { color, border, borderColor, borderRadius } from 'styled-system';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex).attrs({
	bg: 'bg',
})`
	${color};
	/* Other container styles */
`;

// You may use more complex markup, than just <div>s
const Cover = ({ children }) => <div>{children}</div>;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

const Card = Macro({ Cover, Body, Footer })(
	({ Cover, Body, Footer }, props) => (
		<CardBase {...props}>{/* Your layout here */}</CardBase>
	)
);

export default Card;
