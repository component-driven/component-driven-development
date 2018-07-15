import { transparentize } from 'polished';

const fontSizes = {
	xxl: '4rem',
	xl: '2.25rem',
	l: '1.5rem',
	m: '1rem',
	s: '0.875rem',
	xs: '0.75rem',
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
		heading: 1.2,
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
	space: [0, 4, 8, 16, 24, 48, 64, 128],
};
