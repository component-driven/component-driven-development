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

let invertedPalette = {};

Object.keys(palette).forEach(key => {
	invertedPalette[key] = [...palette[key]].reverse();
});

function getColors(palette) {
	return {
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
	};
}

const colors = getColors(palette);

const textStyles = {
	xl: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontSize: ['lg', 'xl'],
		fontWeight: ['bold', 'light'],
	},
	lg: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontSize: 'lg',
		fontWeight: 'normal',
	},
	md: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontSize: 'md',
		fontWeight: 'bold',
	},
	body: {
		fontWeight: 'normal',
		fontFamily: 'body',
		fontSize: 'md',
		lineHeight: 'base',
		color: 'text',
	},
	secondary: {
		fontSize: 'md',
		fontWeight: 'normal',
		lineHeight: 'base',
		fontFamily: 'body',
		color: 'grey.5',
	},
	tertiary: {
		fontSize: 'sm',
		fontWeight: 'normal',
		lineHeight: 'base',
		fontFamily: 'body',
		color: 'grey.5',
	},
	error: {
		fontWeight: 'normal',
		lineHeight: 'base',
		fontFamily: 'body',
		fontSize: 'md',
		color: 'error',
	},
};

const theme = {
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
		body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		monospace: 'Menlo, monospace',
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
		base: 1.5,
		heading: 1.1,
	},
	textStyles,
	colors,
	borders: {
		none: 'none',
		thin: '1px solid',
	},
	radii: {
		base: '0.15em',
	},
	shadows: {
		focus: `0 0 0 2px ${colors.focus}`,
	},
};

export const inverted = {
	...theme,
	colors: {
		...getColors(invertedPalette),
		primary: invertedPalette.grey[4],
		hover: invertedPalette.grey[6],
		focus: invertedPalette.grey[1],
	},
};

export default theme;
