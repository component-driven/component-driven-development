import React, { Component } from 'react';
import SubscriptionForm from './SubscriptionForm';
import subscribe from '../../services/newsletterService';

class SubscriptionFormContainer extends Component {
	state = {
		email: '',
	};

	handleSubmit = event => {
		event.preventDefault();
		subscribe(this.state.email)
			.then(() => {})
			.catch(() => {});
	};

	handleEmailChange = event => {
		this.setState({ email: event.target.value });
	};

	render() {
		return (
			<SubscriptionForm
				onSubmit={this.handleSubmit}
				onEmailChange={this.handleEmailChange}
			/>
		);
	}
}

export default SubscriptionFormContainer;
