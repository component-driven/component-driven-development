/* @jsx jsx */
import { jsx } from 'theme-ui';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Text from '../components/Text';

const Cover = ({ author, children }) => (
	<Flex
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		bg="primary"
		color="background"
		width="100vw"
		height="100vh"
	>
		<Flex alignItems="center" flex="1">
			{children}
		</Flex>
		<Flex width={1} p={4} alignItems="center">
			<Box mr="auto" fontSize="2.5vw">
				<Text as="p">
					{author}
				</Text>
			</Box>
		</Flex>
	</Flex>
);

export default Cover;
