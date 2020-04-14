import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from '../../ThemeProvider';
import XRay from './XRay';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
 		box-sizing:inherit;
	}
`;

const App = ({ children }) => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<XRay />
			{children}
		</>
	</ThemeProvider>
);

export default App;
