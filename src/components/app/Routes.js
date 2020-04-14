import React from 'react';
import { Router } from '@reach/router';
import Login from './Login';

const Routes = () => (
	<Router>
		<Login path="/" />
	</Router>
);

export default Routes;
