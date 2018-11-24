import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '../../../ThemeProvider';
import Button from './Button';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider>
			<Button>Push me</Button>
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
