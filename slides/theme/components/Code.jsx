import React from 'react';
import PropTypes from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import styled from '@emotion/styled'
import codeTheme from '../codeTheme';

function Code({ children, language, inline = false }) {
	if (typeof children !== 'string') {
		return (
			<pre style={{ color: 'firebrick' }}>
				Code: `children` must be a string
			</pre>
		);
	}
	return (
		<Prism PreTag={styled.pre({display: inline ? "inline-block" : "block"})} {...codeTheme} useInlineStyles language={language}>
			{children.replace(/\t/, '  ')}
		</Prism>
	);
}

Code.propTypes = {
	children: PropTypes.string,
	language: PropTypes.oneOf(Prism.supportedLanguages),
	inline: PropTypes.bool
};

export default Code;
