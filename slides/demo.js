import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { fontSizes, space } from './blinky/tokens';

export default ({ children }) => (
	<ThemeProvider
		theme={{
			...theme,
			fontSizes,
			space,
			borders: {
				...theme.borders,
				thin: '0.5vmin solid',
			},
		}}
	>
		<>{children}</>
	</ThemeProvider>
);
