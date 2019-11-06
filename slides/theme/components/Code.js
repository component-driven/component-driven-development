import React from 'react';
import PropTypes from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import codeTheme from '../codeTheme';

function Code({ children, ...props }) {
	console.log(props);
	if (typeof children !== 'string') {
		return (
			<pre style={{ color: 'firebrick' }}>
				Code: `code` prop must be a string
			</pre>
		);
	}
	return (
		<Prism {...codeTheme} {...props}>
			{children.replace(/\t/, '  ')}
		</Prism>
	);
}

Code.propTypes = {
	children: PropTypes.string,
};

export default Code;
