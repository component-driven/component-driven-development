import { modularScale } from 'polished';

const scale = value => modularScale(value, '1rem', 'goldenSection');

const fontSizes = {
	xl: scale(3),
	l: scale(1),
	m: scale(0),
	s: scale(-0.5),
	xs: scale(-0.75),
};

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
	purple: [
		'rgb(255, 230, 242)',
		'rgb(251, 209, 234)',
		'rgb(248, 188, 229)',
		'rgb(231, 143, 222)',
		'rgb(189, 96, 200)',
		'rgb(120, 51, 150)',
		'rgb(52, 18, 90)',
	],
};

let invertedPalette = {};

Object.keys(palette).forEach(key => {
	invertedPalette[key] = [...palette[key]].reverse();
});

function getColors(palette) {
	return {
		...palette,
		bg: palette.grey[0],
		base: palette.grey[6],
		primary: palette.purple[5],
		secondary: palette.grey[5],
		hover: palette.purple[2],
		focus: palette.purple[1],
		error: '#d0453e',
		rating: '#f8c124',
	};
}

const theme = {
	fonts: {
		base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	},
	fontSizes: {
		base: fontSizes.m,
		...fontSizes,
	},
	fontWeights: {
		normal: 400,
		bold: 700,
	},
	headingFontWeights: {
		xl: 400,
		l: 400,
		m: 700,
	},
	lineHeights: {
		base: 1.5,
		heading: 1.1,
	},
	palette,
	colors: getColors(palette),
	borders: {
		none: 'none',
		thin: '1px solid',
	},
	radii: {
		base: '0.15em',
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
	textStyles: {
		base: {},
		secondary: {
			color: palette.grey[5],
		},
		tertiary: {
			color: palette.grey[5],
			fontSize: fontSizes.s,
		},
		error: {
			color: getColors(palette).error,
		},
	},
};

export default theme;

export const inverted = {
	...theme,
	colors: {
		...getColors(invertedPalette),
		primary: invertedPalette.grey[4],
		hover: invertedPalette.grey[6],
		focus: invertedPalette.grey[1],
	},
};
