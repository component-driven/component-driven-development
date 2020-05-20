import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Heading, Link, Text, Box, Stack } from '../components';
import Layout from '../components/app/Layout';

export default () => (
	<Layout>
		<Stack m={4} gap={4}>
			<Heading>Example apps</Heading>
			<Text>Choose the name of your workshop:</Text>
			<Stack as="ul" gap={3}>
				<Box as="li">
					<Link as={GatsbyLink} to="/cdd">
						Design systems for React developers
					</Link>
				</Box>
				<Box as="li">
					<Link as={GatsbyLink} to="/rcl">
						Resilient component libraries in React
					</Link>
				</Box>
			</Stack>
		</Stack>
	</Layout>
);
