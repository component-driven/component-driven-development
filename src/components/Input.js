import React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

const InputBase = styled.input`
	box-sizing: border-box;
	display: block;
	width: 100%;
	font-family: ${props => props.theme.fontFamily.base};
	font-size: ${props => props.theme.fontSize.base};
	color: ${props => props.theme.color.base};
	background-color: ${props => props.theme.color.bg};
	border: 1px solid ${props => props.theme.color.primary};
	border-radius: ${props => props.theme.borderRadius.base};

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.color.focus};
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

const Input = props => <Box is={InputBase} p={2} {...props} />;

export default Input;
