import React from 'react';
import LoginForm from '../patterns/LoginForm';
import { Flex, Heading, Stack } from '../';

const Login = () => (
	<Flex
		as="main"
		justifyContent="center"
		alignItems="center"
		height="100vh"
		width="100%"
	>
		<Stack gap={5}>
			<Heading>Login</Heading>
			<LoginForm />
		</Stack>
	</Flex>
);

export default Login;
