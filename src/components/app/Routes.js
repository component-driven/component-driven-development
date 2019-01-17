import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Homepage';
import Checkout from './CheckoutContainer';

const Routes = () => (
	<Router>
		<Homepage path="/" />
		<Checkout path="/checkout/:dogId" />
	</Router>
);

export default Routes;
