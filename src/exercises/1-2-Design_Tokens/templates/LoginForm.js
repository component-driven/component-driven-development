import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// WORKSHOP_START
const Heading = styled.h1`
	margin: 0;
	margin-bottom: 1em;
	font-family: sans-serif;
	font-size: 32px;
`;

const Label = styled.label`
	display: block;
	font-family: sans-serif;
	margin-bottom: 0.5em;
`;

const Input = styled.input`
	padding: 10px;
	width: 100%;
`;

const FormRow = styled.div`
	margin-bottom: 20px;
`;
// WORKSHOP_END
// FINAL_START
const Heading = styled.h1`
	margin: 0;
	margin-bottom: ${props => props.theme.space[4]};
	font-family: ${props => props.theme.fonts.heading};
	font-size: ${props => props.theme.fontSizes.xl};
`;

const Label = styled.label`
	display: block;
	font-family: ${props => props.theme.fonts.body};
	margin-bottom: ${props => props.theme.space[3]};
`;

const Input = styled.input`
	padding: ${props => props.theme.space[3]};
	width: 100%;
`;

const FormRow = styled.div`
	margin-bottom: ${props => props.theme.space[4]};
`;
// FINAL_END

export default () => {
	return (
		<form>
			<Heading>Login</Heading>
			<FormRow>
				<Label>Email</Label>
				<Input type="email" />
			</FormRow>
			<FormRow>
				<Label>Password</Label>
				<Input type="password" />
			</FormRow>
			<Button type="submit">Login</Button>
		</form>
	);
};
