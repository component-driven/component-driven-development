import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import './styles';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
