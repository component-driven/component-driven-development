import React from 'react';
import Box from '../../components/primitives/Box';
import Flex from '../../components/primitives/Flex';
import Heading from '../../components/primitives/Heading';
import Link from '../../components/primitives/Link';
import Text from '../../components/primitives/Text';
import { Inverted } from '../../../src/components/../ThemeProvider';
import SubscriptionForm from '../../../src/components/app/SubscriptionFormContainer';
import SvgDogPees from '../../../src/components/app/images/SvgDogPees';

const Footer = () => {
	return (
		<Inverted>
			<>
				<div>
					<SvgDogPees width="100" />
				</div>
				<div>
					<h2>Subscribe to our newsletter!</h2>
					<SubscriptionForm />
				</div>
				<div>
					© {new Date().getFullYear()}{' '}
					<a href="https://okonet.ru/">Andrey Okonetchnikov</a> and{' '}
					<a href="https://sapegin.me/">Artem Sapegin</a>
				</div>
			</>
		</Inverted>
	);
};

export default Footer;
