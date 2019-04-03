import React from 'react';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './styles';

const StyleGuideWrapper = ({ children }) => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			{children}
		</>
	</ThemeProvider>
);

export default StyleGuideWrapper;
