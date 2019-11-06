import {
	baseColor,
	bgColor,
	darkColor,
	lightColor,
	primaryColor,
	secondaryColor,
	addColor,
	removeColor,
	monospace,
	fontSizes,
} from './tokens';

export default {
	// Styles based on https://github.com/conorhastings/react-syntax-highlighter/
	// Colors are custom
	plain: {
		color: baseColor,
		backgroundColor: bgColor,
	},
	styles: [
		{
			types: ['attr-name', 'symbol', 'entity', 'keyword'],
			style: {
				color: baseColor,
			},
		},
		{
			types: [
				'attr-value',
				'constant',
				'boolean',
				'string',
				'selector',
				'char',
				'variable',
				'class-name',
			],
			style: {
				color: primaryColor,
			},
		},
		{
			types: ['property', 'tag'],
			style: {
				color: secondaryColor,
			},
		},
		{
			types: [
				'comment',
				'block-comment',
				'prolog',
				'doctype',
				'cdata',
				'number',
				'punctuation',
				'operator',
			],
			style: {
				color: lightColor,
			},
		},
		{
			types: ['function-name', 'at-rule'],
			style: {
				color: darkColor,
			},
		},
		{
			types: ['inserted'],
			style: {
				color: addColor,
			},
		},
		{
			types: ['deleted'],
			style: {
				color: removeColor,
			},
		},
		{
			types: ['builtin'],
			style: {
				color: baseColor,
			},
		},
		{
			types: ['function'],
			style: {
				color: baseColor,
				fontWeight: 'bold',
			},
		},
		{
			types: ['url'],
			style: {
				color: lightColor,
				textDecoration: 'underline',
			},
		},
		{
			types: ['important'],
			style: {
				fontWeight: '400',
			},
		},
		{
			types: ['bold'],
			style: {
				fontWeight: 'bold',
			},
		},
		{
			types: ['italic'],
			style: {
				fontStyle: 'italic',
			},
		},
		{
			types: ['namespace'],
			style: {
				opacity: 0.7,
			},
		},
	],
	style: {
		'pre[class*="language-"]': {
			margin: 0,
			padding: 0,
			color: darkColor,
			fontFamily: monospace,
			textAlign: 'left',
			whiteSpace: 'pre',
			wordSpacing: 'normal',
			wordBreak: 'normal',
			wordWrap: 'normal',
			MozTabSize: '2',
			OTabSize: '2',
			tabSize: '2',
			WebkitHyphens: 'none',
			MozHyphens: 'none',
			msHyphens: 'none',
			hyphens: 'none',
		},
		':not(pre) > code[class*="language-"]': {
			whiteSpace: 'normal',
		},
		comment: {
			color: lightColor,
		},
		'block-comment': {
			color: lightColor,
		},
		prolog: {
			color: lightColor,
		},
		doctype: {
			color: lightColor,
		},
		cdata: {
			color: lightColor,
		},
		punctuation: {
			color: lightColor,
		},
		tag: {
			color: secondaryColor,
		},
		'attr-name': {
			color: baseColor,
		},
		namespace: {
			color: secondaryColor,
		},
		'function-name': {
			color: darkColor,
		},
		boolean: {
			color: primaryColor,
		},
		number: {
			color: lightColor,
		},
		function: {
			color: baseColor,
			fontWeight: 'bold',
		},
		property: {
			color: secondaryColor,
		},
		'class-name': {
			color: primaryColor,
		},
		constant: {
			color: primaryColor,
		},
		symbol: {
			color: baseColor,
		},
		selector: {
			color: primaryColor,
		},
		important: {
			color: darkColor,
			fontWeight: 'bold',
		},
		atrule: {
			color: darkColor,
		},
		keyword: {
			color: baseColor,
		},
		builtin: {
			color: baseColor,
		},
		string: {
			color: primaryColor,
		},
		char: {
			color: primaryColor,
		},
		'attr-value': {
			color: primaryColor,
		},
		regex: {
			color: primaryColor,
		},
		variable: {
			color: primaryColor,
		},
		operator: {
			color: lightColor,
		},
		entity: {
			color: baseColor,
		},
		url: {
			color: lightColor,
			textDecoration: 'underline',
		},
		bold: {
			fontWeight: 'bold',
		},
		italic: {
			fontStyle: 'italic',
		},
		inserted: {
			color: addColor,
		},
		deleted: {
			color: removeColor,
		},
	},
};
