import ReactDOMServer from 'react-dom/server';
import CDTheme from '@component-driven/mdx-deck-theme';
import { ThemeProvider } from 'styled-components';
import Group from 'react-group';
import {
	Box,
	Flex,
	Grid,
	Stack,
	Text,
	Heading,
	Input,
	Button,
	Link,
} from '../../../src/components';
import theme from '../../../src/theme';

const { LiveCode: LC } = CDTheme.components;

export default ({ code }) => {
	const finalCode = ReactDOMServer.renderToStaticMarkup(code)
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"');

	return (
		<LC
			code={finalCode}
			scope={{
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
			}}
		/>
	);
};
