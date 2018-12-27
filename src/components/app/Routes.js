import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Homepage';
import Checkout from './Checkout';

const Routes = () => (
	<Router>
		<Homepage path="/" />
		<Checkout path="/checkout/:dog" />
	</Router>
);

export default Routes;
