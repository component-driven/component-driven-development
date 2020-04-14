import React from 'react';
import {
	Button,
	Grid,
	Input,
	Link,
	Stack,
	Text,
	Label,
} from '../../components';

export default () => (
	<Stack as="form" gap={4}>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Label required htmlFor="email1">
				Email
			</Label>
			<Input type="email" id="email1" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Label required htmlFor="password1">
				Password
			</Label>
			<Input type="password" id="password1" />
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
