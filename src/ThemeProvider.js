import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { inverted } from './theme';

export default ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Inverted = ({ children }) => (
	<ThemeProvider theme={inverted}>{children}</ThemeProvider>
);
