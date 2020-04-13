import React from 'react';
import Box from '../../components/primitives/Box';
import Grid from '../../components/primitives/Grid';
import Button from '../../components/primitives/Button';
import Link from '../../components/primitives/Link';
import Text from '../../components/primitives/Text';
import Input from '../../components/primitives/Input';
import Heading from '../../components/patterns/Heading';

export default () => (
	<Grid as="form" gridGap={4}>
		<Heading mb={5}>Login</Heading>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
			<Text as="label" display="block">
				<Box mb={2}>Username</Box>
			</Text>
			<Input type="text" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
			<Text as="label" display="block">
				<Box mb={2}>Password</Box>
			</Text>
			<Input type="password" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '150px 1fr']}>
			<Grid gridColumn={[1, 2]} gridGap={3}>
				<Button variant="primary">Log in</Button>
				<Link href="#">Forgot your password?</Link>
			</Grid>
		</Grid>
	</Grid>
);
