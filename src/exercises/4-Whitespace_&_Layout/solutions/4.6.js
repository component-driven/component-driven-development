import React from 'react';
import Box from '../../../../src/components/primitives/Box';
import Flex from '../../../../src/components/primitives/Flex';
import Heading from '../../../../src/components/primitives/Heading';
import Link from '../../../../src/components/primitives/Link';
import Text from '../../../../src/components/primitives/Text';
import { Inverted } from '../../../../src/components/../ThemeProvider';
import SubscriptionForm from '../../../../src/components/app/SubscriptionFormContainer';
import SvgDogPees from '../../../../src/components/app/images/SvgDogPees';

const Footer = () => {
	return (
		<Inverted>
			<Flex px={5} py={4} flexDirection="column" bg="bg" color="secondary">
				<Box mx="auto" mb={5}>
					<SvgDogPees width="100" />
				</Box>
				<Box mb={5} mx="auto" width={[1, 2 / 3, 1 / 2]}>
					<Heading size="lg" as="h2" mb={4} align="center">
						Subscribe to our newsletter!
					</Heading>
					<SubscriptionForm />
				</Box>
				<Text variant="tertiary" align="center">
					© {new Date().getFullYear()}{' '}
					<Link href="https://okonet.ru/" shy>
						Andrey Okonetchnikov
					</Link>{' '}
					and{' '}
					<Link href="https://sapegin.me/" shy>
						Artem Sapegin
					</Link>
				</Text>
			</Flex>
		</Inverted>
	);
};

export default Footer;
