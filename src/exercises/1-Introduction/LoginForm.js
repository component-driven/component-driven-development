import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Heading = styled.h1``;

const Label = styled.label``;

const Input = styled.input``;

const FormRow = styled.div``;

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
