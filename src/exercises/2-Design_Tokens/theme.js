const theme = {
	space: [0, '2px', '4px', '8px', '16px', '32px'],
	colors: {
		background: '#fff',
		text: '#000',
		primary: '#f39037',
		secondary: '#ccc',
		accent: '#509cb7',
		muted: '#efefef',
	},
	fonts: {
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		monospace: `"Mono Lisa", Monaco, monospace` /* Check out https://monolisa.dev for Mono Lisa font */,
	},
	fontSizes: {
		xl: '4rem',
		lg: '2rem',
		md: '1rem',
		sm: '0.9rem',
		xs: '0.75rem',
	},
	fontWeights: {
		heading: 'bold',
		body: 'normal',
	},
	textStyles: {
		heading: {
			fontSize: 'xl',
			fontWeight: 'heading',
		},
		body: {
			fontSize: 'md',
			fontWeight: 'body',
		},
	},
};

export default theme;
