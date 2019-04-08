import React from 'react';
import Box from '../core/Box';
import Flex from '../core/Flex';
import Stack from '../core/Stack';
import Link from '../core/Link';
import Text from '../core/Text';

const Header = () => (
	<Flex
		justifyContent={['center', 'space-between']}
		alignItems="baseline"
		flexWrap="wrap"
	>
		<Box width={[1, 'auto']} mb={2}>
			<Text as="h1">
				<Link href="/">Rent-o-dog</Link>
			</Text>
		</Box>
		<nav role="navigation">
			<Stack justifyContent="center" gap={4} flexDirection="row" as="ul">
				<Text as="li">
					<Link href="/">How it works</Link>
				</Text>
				<Text as="li">
					<Link href="/">Contact us</Link>
				</Text>
				<Text as="li">
					<Link href="/">Login for dogs</Link>
				</Text>
			</Stack>
		</nav>
	</Flex>
);

export default Header;
