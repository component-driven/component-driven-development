import React from 'react';
import {
	Box,
	Flex,
	Stack,
	Button,
	Link,
	Text,
	Input,
	Heading,
} from '../../../../components';

const LoginPage = () => {
	return (
		<Stack as="form" gap={5}>
			<Text as="label" display="block" mb={3}>
				<Box mb={2}>Username</Box>
				<Input type="text" />
			</Text>
			<Text as="label" display="block" mb={4}>
				<Box mb={2}>Password</Box>
				<Input type="password" />
			</Text>
			<Box mb={4}>
				<Link href="#">Forgot your password?</Link>
			</Box>
			<Button>Log in</Button>
		</Stack>
	);
};

export default LoginPage;
