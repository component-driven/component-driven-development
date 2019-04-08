import React from 'react';
import Box from '../../core/Box';
import Flex from '../../core/Flex';
import Heading from '../../core/Heading';
import Link from '../../core/Link';
import Text from '../../core/Text';
import { Inverted } from '../../../ThemeProvider';
import SubscriptionForm from '../../app/SubscriptionFormContainer';
import SvgDogPees from '../../app/images/SvgDogPees';

const Footer = () => {
	return (
		<Inverted>
			<Flex px={5} py={4} flexDirection="column" bg="bg" color="secondary">
				<Box mx="auto" mb={5}>
					<SvgDogPees width="100" />
				</Box>
				<Box mb={5} mx="auto" width={[1, 2 / 3, 1 / 2]}>
					<Heading size="l" as="h2" mb={4} align="center">
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
