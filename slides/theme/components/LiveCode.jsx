import { LiveCode as XLiveCode } from 'mdx-deck-live-code';
import { ThemeProvider } from 'styled-components';
import Text from '../../../src/components/core/Text';
import theme from '../../../src/theme';
import Heading from '../../../src/components/core/Heading';
import Box from '../../../src/components/core/Box';
import { Flex } from '../../../src/components/core/Flex/Flex';
import Stack from 'stack-styled';
import Input from '../../../src/components/core/Input';
import Button from '../../../src/components/core/Button';

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
					Stack,
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
