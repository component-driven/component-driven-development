import { transparentize } from 'polished';
export default {
	fontFamily: {
		base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	},
	fontSize: {
		xxl: '4rem',
		xl: '2.25rem',
		l: '1.5rem',
		base: '1rem',
		s: '0.875rem',
		xs: '0.75rem',
	},
	color: {
		bg: '#fff',
		base: '#333',
		primary: '#8667a8',
		secondary: '#767676',
		light: '#ccc',
		lighter: '#efefef',
		link: '#8667a8',
		hover: '#ed9dc5',
		focus: transparentize(0.4, '#ed9dc5'),
		error: '#d0453e',
	},
	borderRadius: {
		base: '0.15em',
	},
	space: [0, 4, 8, 16, 24, 48, 64, 128],
};
