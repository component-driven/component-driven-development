import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Heading, Link, Text, Stack } from '../components';
import Layout from '../components/app/Layout';

export default () => (
	<Layout>
		<Stack m={4} gap={5}>
			<Heading>Page not found ;—(</Heading>
			<Text>
				Try to start from the{' '}
				<Link as={GatsbyLink} to="/">
					home page
				</Link>
			</Text>
		</Stack>
	</Layout>
);
