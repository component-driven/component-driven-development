/* @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/prism';

export default ({ children, lang, theme = "duotoneLight", sx }) => {
	return (
		<Box sx={sx}>
		<SyntaxHighlighter language={lang} style={themes[theme]}>
			{children}
		</SyntaxHighlighter>
		</Box>
	);
};
