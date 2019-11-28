import { LiveCode as XLiveCode } from 'mdx-deck-live-code';
import { ThemeProvider } from 'styled-components';
import Group from 'react-group';
import Text from '../../../src/components/primitives/Text';
import theme from '../../../src/theme';
import Heading from '../../../src/components/primitives/Heading';
import Box from '../../../src/components/primitives/Box';
import Flex from '../../../src/components/primitives/Flex';
import Input from '../../../src/components/primitives/Input';
import Button from '../../../src/components/primitives/Button';
import Grid from '../../../src/components/primitives/Grid';
import Stack from '../../../src/components/primitives/Stack';

export default ({ code, size, title }) => {
	return (
		<div>
		<XLiveCode
			title={title}
			code={code}
			size={size}
			providerProps={{
				scope: {
					Box,
					Flex,
					Grid,
					Stack,
					Group,
					Text,
					Heading,
					Input,
					Button,
					ThemeProvider,
					theme,
				},
			}}
		/>
		</div>
	);
};
