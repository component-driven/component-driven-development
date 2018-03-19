import React from 'react';
import Link from './Link';
import Text from './Text';

const Footer = () => {
	return (
		<Text tertiary>
			© {new Date().getFullYear()} <Link href="http://sapegin.me/" shy>
				Artem Sapegin
			</Link>
		</Text>
	);
};

export default Footer;
