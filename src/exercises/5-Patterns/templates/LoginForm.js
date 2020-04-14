import React from 'react';
import {
	Box,
	Flex,
	Grid,
	Stack,
	Button,
	Link,
	Text,
	Input,
} from '../../components';

// WORKSHOP_START
const LoginForm = () => {
	return <form>Your markup here</form>;
};
// WORKSHOP_END
// FINAL_START
const LoginForm = () => (
	<Stack as="form" gap={4}>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Text as="label" display="block">
				Username
			</Text>
			<Input type="text" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Text as="label" display="block">
				Password
			</Text>
			<Input type="password" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Grid gridColumn={[1, 2]} gridGap={3}>
				<Button variant="primary">Log in</Button>
				<Link href="#">Forgot your password?</Link>
				<Text variant="disclaimer">
					By using our site you agree to the following{' '}
					<Link href="/" color="inherit">
						Terms of Service
					</Link>
					.
				</Text>
			</Grid>
		</Grid>
	</Stack>
);
// FINAL_END

export default LoginForm;
