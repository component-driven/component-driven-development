import theme from '@component-driven/mdx-deck-theme';

export default {
	...theme,
	styles: {
		...theme.styles,
		root: {
			...theme.styles.root,
			fontSize: '16px', // Change the base font size for the website
		},
	},
};
