import React from 'react';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './styles';
import Routes from './components/app/Routes';
import XRay from './XRay';

const App = () => (
	<ThemeProvider>
		<>
			<GlobalStyle />
			<XRay />
			<Routes />
		</>
	</ThemeProvider>
);

export default App;
