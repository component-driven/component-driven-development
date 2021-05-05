const palette = {
	grey: [
		'rgb(51, 51, 51)',
		'rgb(126, 126, 126)',
		'rgb(187, 187, 187)',
		'rgb(225, 225, 225)',
		'rgb(246, 246, 246)',
		'rgb(250, 250, 250)',
		'rgb(255, 255, 255)',
	],
};

const textStyles = {
	heading: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontSize: 'lg',
		fontWeight: 'bold',
	},
	body: {
		fontWeight: 'normal',
		fontFamily: 'body',
		fontSize: 'md',
		lineHeight: 'body',
		color: 'text',
	},
	disclaimer: {
		fontSize: 'sm',
		fontWeight: 'normal',
		lineHeight: 'body',
		fontFamily: 'body',
		color: 'secondary',
	},
	error: {
		fontWeight: 'normal',
		lineHeight: 'body',
		fontFamily: 'body',
		fontSize: 'md',
		color: 'error',
	},
};

const theme = {
	colors: {
		...palette,
		background: palette.grey[6],
		text: palette.grey[0],
		primary: '#00beff',
		secondary: palette.grey[2],
		accent: '#fa3653',
		muted: palette.grey[4],
		error: '#d0453e',
	},
	space: [
		0,
		'0.125rem', // 2px
		'0.25rem', // 4px
		'0.5rem', // 8px
		'1rem', // 16px
		'2rem', // 32px
		'4rem', // 64px
		'8rem', // 128px
		'16rem', // 256px
	],
	fonts: {
		heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
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
		light: 200,
		normal: 400,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.1,
	},
	borders: {
		none: 'none',
		thin: '1px solid',
	},
	radii: {
		none: 0,
		base: '0.25em',
		round: '99999px',
	},
	textStyles,
};

export default theme;
