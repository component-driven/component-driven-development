import { transparentize, modularScale } from 'polished';

const scale = value =>
	modularScale(value, 1, 'perfectFifth').replace('em', 'rem');

const fontSizes = {
	xxl: scale(4),
	xl: scale(3),
	l: scale(1),
	m: scale(0),
	s: scale(-0.5),
	xs: scale(-0.75),
};

export default {
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
	lineHeights: {
		base: 1.5,
		heading: 1.1,
	},
	colors: {
		bg: '#fff',
		base: '#333',
		primary: '#8667a8',
		secondary: '#767676',
		light: '#ccc',
		lighter: '#efefef',
		hover: '#ed9dc5',
		focus: transparentize(0.4, '#ed9dc5'),
		error: '#d0453e',
	},
	borders: {
		none: 'none',
		thin: '1px solid',
	},
	radii: {
		base: '0.15em',
	},
	space_: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	space: [
		0,
		'0.25rem',
		'0.5rem',
		'1rem',
		'2rem',
		'4rem',
		'8rem',
		'16rem',
		'32rem',
	],
};
