import React from 'react';
import Provider from './Provider';
import GlobalStyle from './styles';
import Layout from './components/app/Layout';

const App = () => (
	<Provider>
		<>
			<GlobalStyle />
			<Layout />
		</>
	</Provider>
);

export default App;
