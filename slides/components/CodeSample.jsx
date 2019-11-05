import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => {

	const codeString = '(num) => num + 1';
	return (
		<SyntaxHighlighter language="javascript" style={dark}>
			{codeString}
		</SyntaxHighlighter>
	);
};
