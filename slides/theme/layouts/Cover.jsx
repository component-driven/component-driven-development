import React from 'react';
import PropTypes from 'prop-types';
import { Head, Box, Flex, Text, Heading } from '../';

const Cover = ({ author, title }) => (
	<Flex
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		bg="primary"
		color="background"
		width="100vw"
		height="100vh"
	>
		<Head>
			<title>{title}</title>
		</Head>
		<Flex alignItems="center" flex="1">
			<Heading as="h1">{title}</Heading>
		</Flex>
		<Flex width={1} p={4} alignItems="center">
			<Box mx="auto" fontSize="2.5vw">
				<Text as="p">by {author}</Text>
			</Box>
		</Flex>
	</Flex>
);

Cover.propTypes = {
	/** Talk title */
	title: PropTypes.string.isRequired,

	/** Author name */
	author: PropTypes.string.isRequired,
};

export default Cover;
