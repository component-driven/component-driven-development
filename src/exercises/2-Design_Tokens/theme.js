const theme = {
	space: [0, '2px', '4px', '8px', '16px', '32px'],
	colors: {
		background: '#fff',
		text: '#000',
		primary: '#f39037',
		secondary: '#509cb7',
		muted: '#ccc',
	},
	fonts: {
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		monospace: `"Mono Lisa", Monaco, monospace` /* Check out https://monolisa.dev for Mono Lisa font */,
	},
	fontSizes: {
		xs: '0.8rem',
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '4rem',
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
