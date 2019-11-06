import { LiveCode as XLiveCode } from 'mdx-deck-live-code';
import { ThemeProvider } from 'styled-components';
import Text from '../../../src/components/core/Text';
import theme from '../../../src/theme';
import Heading from '../../../src/components/core/Heading';

export default ({ code, size, title }) => {
	return (
		<XLiveCode
			title={title}
			code={`<ThemeProvider theme={theme}>
${code}</ThemeProvider>`}
			size={size}
			providerProps={{
				scope: {
					Text,
					Heading,
					ThemeProvider,
					theme,
				},
			}}
		/>
	);
};
