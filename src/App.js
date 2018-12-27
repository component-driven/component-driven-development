import React from 'react';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './styles';
import Routes from './components/app/Routes';

const App = () => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<Routes />
		</>
	</ThemeProvider>
);

export default App;
