import React from 'react';
import Box from '../../../src/components/core/Box';
import Flex from '../../../src/components/core/Flex';
import Heading from '../../../src/components/core/Heading';
import Link from '../../../src/components/core/Link';
import Text from '../../../src/components/core/Text';
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
