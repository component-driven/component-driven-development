import { createElement } from 'react';
import { pre, createCode } from '@mdx-deck/themes/syntax-highlighter-prism';

import {
	bgColor,
	baseColor,
	darkColor,
	primaryColor,
	secondaryColor,
	font,
	monospace,
	fontSizes,
} from './tokens';
import codeTheme from './codeTheme';
import Heading from './components/Heading';
import Text from './components/Text';
import List from './components/List';

function createTag(component, props) {
	return ownProps =>
		createElement(component, {
			...props,
			...ownProps,
		});
}

export default {
	// aspectRatio: 9 / 16,
	googleFont:
		'https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Work+Sans:400,700&amp;subset=latin-ext',
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
		paddingTop: '5vmax',
		paddingBottom: 0,
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
		margin: 0,
		fontWeight: 'normal',
	},
	h2: {
		margin: 0,
		fontWeight: 'normal',
		fontSize: fontSizes.l,
	},
	h3: {
		margin: 0,
		fontWeight: 'normal',
		fontSize: fontSizes.m,
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
		margin: 0,
		padding: 0,
		textAlign: 'left',
		listStyle: 'none',
	},
	components: {
		h1: createTag(Heading, { as: 'h1', m: 0 }),
		h2: createTag(Heading, { as: 'h2', m: 0 }),
		h3: createTag(Heading, { as: 'h3', m: 0 }),
		p: createTag(Text, { as: 'p', my: 2 }),
		ul: createTag(List, { as: 'ul' }),
		ol: createTag(List, { as: 'ol' }),
		pre,
		code: createCode(codeTheme),
	},
};
