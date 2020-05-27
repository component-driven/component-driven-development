import React from 'react';
import { Flex, Stack, Button, Text } from '../components';
import Layout from '../components/app/Layout';
import {
	DialogProvider,
	useDialog,
} from '../exercises/2-5-Context/final/DialogProvider';

function PromptExample() {
	const [name, setName] = React.useState('');
	const { prompt } = useDialog();

	return (
		<Flex
			as="main"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			width="100%"
		>
			<Stack gap={3}>
				<Text>
					<b>Name:</b> {name || 'Incognito'}
				</Text>
				<Button
					onClick={async () => {
						const name = await prompt({
							title: 'The universe asks',
							message: 'What’s your name, yo?',
							defaultValue: 'Incognito',
						});
						setName(name);
					}}
				>
					Ask name
				</Button>
			</Stack>
		</Flex>
	);
}

export default () => (
	<Layout>
		<DialogProvider>
			<PromptExample />
		</DialogProvider>
	</Layout>
);
