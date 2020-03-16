import React from 'react';
import {
	Heading,
	Text,
	Box,
	Flex,
	Grid,
	Input,
	Link,
	Button,
	Stack,
} from '../../../components';

export default () => {
	return (
		<Stack as="form" gridGap={[4,5]} padding={[4,5]} bg="muted">
			<Heading size="lg">Login please</Heading>
			<Grid gridGap={4} gridTemplateColumns={["1fr", "auto 1fr"]} alignItems="center">
				<Text as="label" htmlFor="username">
					Username
				</Text>
				<Input
					type="email"
					name="username"
					id="username"
					placeholder="john@musterman.com"
					autoFocus
				/>
			</Grid>
			<Grid gridGap={4} gridTemplateColumns={["1fr", "auto 1fr"]} alignItems="center">
				<Text as="label" htmlFor="password">
					Password
				</Text>
				<Input type="password" name="password" id="password" />
			</Grid>
			<Flex flexDirection={["column", "row"]}>
				<Box mr={[0, 4]}>
					<Button type="submit" variant="primary">
						Log in
					</Button>
				</Box>
				<Box ml={[0, "auto"]}>
					<Link href="#">Forgot your password?</Link>
				</Box>
			</Flex>
		</Stack>
	);
};
