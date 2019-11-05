import theme from 'mdx-deck/themes';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
	javascript,
	css,
} from 'react-syntax-highlighter/dist/esm/languages/prism';

export default {
	...theme,
	prism: {
		style: ghcolors,
		languages: {
			css,
			javascript,
		},
	},
};
