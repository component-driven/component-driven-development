import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Homepage';
import Checkout from './CheckoutContainer';

const Routes = () => (
	// HACK: Make the app work when deployed in a subfolder
	<Router basepath={document.location.pathname}>
		<Homepage path="/" />
		<Checkout path="/checkout/:dogId" />
	</Router>
);

export default Routes;
