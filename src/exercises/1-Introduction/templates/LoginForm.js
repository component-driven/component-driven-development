import React from 'react';
import styled from 'styled-components';
import Button from './final/Button';

// WORKSHOP_START
const Heading = styled.h1``;

const Label = styled.label``;

const Input = styled.input``;

const FormRow = styled.div``;
// WORKSHOP_END
// FINAL_START
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
