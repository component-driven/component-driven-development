import styled from 'styled-components/macro'; //eslint-disable-line
import React from 'react';
import Stack from '../primitives/Stack';
import Box from '../primitives/Box';
import Flex from '../primitives/Flex';
import Link from '../primitives/Link';
import Text from '../primitives/Text';

const Header = () => (
	<Flex justifyContent={['center', 'space-between']} flexWrap="wrap">
		<Box width={[1, 'auto']} mb={2}>
			<Text as="h1">
				<Link href="/">Rent-o-dog</Link>
			</Text>
		</Box>
		<nav role="navigation">
			<Stack
				justifyContent="center"
				gridAutoFlow="column"
				gridGap={4}
				mt={0}
				mb={2}
				as="ul"
				css={{
					listStyleType: 'none',
				}}
			>
				<Text as="li">
					<Link href="#">How it works</Link>
				</Text>
				<Text as="li">
					<Link href="#">Contact us</Link>
				</Text>
				<Text as="li">
					<Link href="#">Login for dogs</Link>
				</Text>
			</Stack>
		</nav>
	</Flex>
);

export default Header;
