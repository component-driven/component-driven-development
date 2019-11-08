import React from 'react';
import Flex from '../components/Flex';

const Center = ({ children }) => {
	return (
		<Flex
			width="100vw"
			height="100vh"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			{children}
		</Flex>
	);
};

export default Center;
