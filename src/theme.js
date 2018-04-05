import { transparentize } from 'polished';
export default {
	fontFamily: {
		base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	},
	fontSize: {
		base: '1rem',
		small: '0.875rem',
		big: '1.25rem',
		alpha: '3rem',
		beta: '2.25rem',
		gamma: '1.5rem',
		delta: '1.25rem',
		epsilon: '1rem',
		zeta: '0.875rem',
	},
	color: {
		bg: '#fff',
		base: '#333',
		primary: '#8667a8',
		secondary: '#767676',
		light: '#ccc',
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
