import React from 'react';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './styles';
import Layout from './components/app/Layout';

const App = () => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<Layout />
		</>
	</ThemeProvider>
);

export default App;
