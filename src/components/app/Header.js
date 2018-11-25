import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Stack from 'stack-styled';
import Hero from '../core/Hero';
import Heading from '../core/Heading';
import Link from '../core/Link';
import Text from '../core/Text';
import { Inverted } from '../../ThemeProvider';

const BACKGROUND = `linear-gradient(to bottom, rgba(44,35,28,0.7), rgba(0,0,0,0)),
url(images/drew-coffman-125736-unsplash.jpg)`;

const Header = () => (
	<Inverted>
		<Hero
			backgroundImage={BACKGROUND}
			backgroundPosition="bottom center"
			px={4}
			py={3}
		>
			<Flex justifyContent={['center', 'space-between']} flexWrap="wrap">
				<Box width={[1, 'auto']} mb={2}>
					<Text as="h1">
						<Link href="/">Rent-o-dog</Link>
					</Text>
				</Box>
				<Stack justifyContent="center" gridAutoFlow="column" gap={4} mb={2}>
					<Text>
						<Link href="/">Our dogs</Link>
					</Text>
					<Text>
						<Link href="/">How it works</Link>
					</Text>
					<Text>
						<Link href="/">Contact us</Link>
					</Text>
				</Stack>
			</Flex>
			<Box py={7}>
				<Heading level={2} size="xl" mb={5}>
					Good boys and girs to brighten your office
				</Heading>
			</Box>
		</Hero>
	</Inverted>
);

export default Header;
