import React from 'react';
import LoginForm from '../patterns/LoginForm';
import { Flex } from '../';

const Login = () => (
	<Flex
		as="main"
		justifyContent="center"
		alignItems="center"
		height="100vh"
		width="100%"
	>
		<LoginForm />
	</Flex>
);

export default Login;
