const palette = {
	grey: [
		'rgb(255, 255, 255)',
		'rgb(250, 250, 250)',
		'rgb(246, 246, 246)',
		'rgb(225, 225, 225)',
		'rgb(187, 187, 187)',
		'rgb(126, 126, 126)',
		'rgb(51, 51, 51)',
	],
};

const textStyles = {
	heading: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontSize: ['lg', 'xl'],
		fontWeight: ['bold', 'light'],
	},
	body: {
		fontWeight: 'normal',
		fontFamily: 'body',
		fontSize: 'md',
		lineHeight: 'body',
		color: 'text',
	},
	help: {
		fontSize: 'sm',
		fontWeight: 'normal',
		lineHeight: 'body',
		fontFamily: 'body',
		color: 'grey.5',
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
		background: palette.grey[0],
		text: palette.grey[6],
		primary: 'rgb(120, 51, 150)',
		secondary: palette.grey[5],
		accent: '#f8c124',
		muted: palette.grey[3],
		hover: 'rgb(248, 188, 229)',
		focus: 'rgb(251, 209, 234)',
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
	},
	fontSizes: {
		xl: '4em',
		lg: '2em',
		md: '1em',
		sm: '0.9em',
		xs: '0.75em',
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
		round: 99999,
	},
	textStyles,
};

export default theme;
