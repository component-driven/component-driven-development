import { LiveCode as XLiveCode } from 'mdx-deck-live-code';
import { ThemeProvider } from 'styled-components';
import Group from 'react-group';
import {Box, Flex, Grid, Stack, Text, Heading, Input, Button, Link} from '../../../src/components'
import theme from '../../../src/theme';

export default ({ code, size, title }) => {
	return (
		<div>
		<XLiveCode
			title={title}
			code={code}
			size={size}
			providerProps={{
				scope: {
					theme,
					ThemeProvider,
					Box,
					Flex,
					Grid,
					Stack,
					Group,
					Text,
					Heading,
					Input,
					Button,
					Link,
				},
			}}
		/>
		</div>
	);
};
