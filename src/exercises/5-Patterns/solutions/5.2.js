import React from 'react';
import Box from '../../../../components/primitives/Box';
import Flex from '../../../../components/primitives/Flex';
import Stack from '../../../../components/primitives/Stack';
import Heading from '../../../../components/primitives/Heading';
import Button from '../../components/primitives/Button';
import Link from '../../../../components/primitives/Link';
import Text from '../../../../components/primitives/Text';
import Input from '../../../../components/primitives/Input';

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
