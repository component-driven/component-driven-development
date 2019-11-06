import React from 'react';
import styled from '@emotion/styled';

const fontSize = props => {
	const { length } = props.children;
	if (props.huge) {
		return '30vmax';
	}
	if (length <= 30) {
		return '12vmax';
	}
	return '8vmax';
};

const Root = styled.h1`
	max-width: 90vw;
	font-size: ${fontSize};
	font-weight: ${props => (props.huge ? 'bold' : 'normal')};
	line-height: 1.1;
	text-align: center;
`;

const Heading = ({ is = 'h1', ...props }) => {
	const Component = Root.withComponent(is);
	return <Component {...props} />;
};

export default Heading;
