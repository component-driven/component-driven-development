import React from 'react';
import PropTypes from 'prop-types';
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

const Layout = ({ children }) => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<XRay />
			{children}
		</>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
