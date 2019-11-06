import { pre, createCode } from '@mdx-deck/themes/syntax-highlighter-prism';

import {
	uiColor,
	uiHoverColor,
	bgColor,
	lightBgColor,
	baseColor,
	darkColor,
	lightColor,
	primaryColor,
	secondaryColor,
	addColor,
	removeColor,
	font,
	monospace,
	fontSizes,
} from './tokens';
import codeTheme from './codeTheme';
import { OL, UL } from './index';

export default {
	// aspectRatio: 9 / 16,
	googleFont:
		'https://fonts.googleapis.com/css?family=Fira+Mono:400,700|PT+Sans:400,700&amp;subset=latin-ext',
	font,
	monospace,
	fontSizes,
	colors: {
		text: baseColor,
		background: bgColor,
		link: baseColor,
		heading: 'inherit',
		primary: primaryColor,
		secondary: secondaryColor,
		pre: darkColor,
		code: darkColor,
	},
	css: {
		fontFeatureSettings: `'kern', 'pnum', common-ligatures contextual historical-ligatures`,
		WebkitFontKerning: 'normal',
		fontKerning: 'normal',
		fontVariantNumeric: 'proportional-nums',
		fontVariantLigatures: 'common-ligatures contextual historical-ligatures',
		justifyContent: 'flex-start',
		img: {
			maxWidth: '95vw',
			maxHeight: '92vh',
		},
		li: {
			fontSize: fontSizes.m,
			marginBottom: '0.75vmax',
		},
		'p pre, li pre': {
			display: 'inline-block',
			fontSize: fontSizes.m,
			lineHeight: 1.2,
		},
	},
	heading: {
		marginTop: '2vmax',
		marginBottom: 0,
		lineHeight: 1.1,
		textAlign: 'center',
		'& + *': {
			marginTop: '2vmax !important',
		},
		'& + img': {
			maxHeight: 'calc(100vh - 10rem)', // Heading + dots below
		},
	},
	h1: {
		fontWeight: 'normal',
	},
	h2: {
		fontWeight: 'normal',
		fontSize: fontSizes.xl,
	},
	pre: {
		textAlign: 'left',
		fontSize: fontSizes.s,
		lineHeight: '1.3',
	},
	ol: {
		textAlign: 'left',
	},
	ul: {
		textAlign: 'left',
	},
	components: {
		ul: UL,
		ol: OL,
		pre,
		code: createCode(codeTheme),
	},
};
