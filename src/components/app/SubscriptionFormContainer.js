import React, { Component } from 'react';
import SubscriptionForm from '../patterns/SubscriptionForm';
import subscribe from '../../services/newsletterService';

class SubscriptionFormContainer extends Component {
	state = {
		email: '',
		error: undefined,
		sending: false,
		hasBeenSent: false,
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			sending: true,
			hasBeenSent: false,
			error: undefined,
		});
		subscribe(this.state.email)
			.then(() =>
				this.setState({
					sending: false,
					hasBeenSent: true,
				})
			)
			.catch(() =>
				this.setState({
					sending: false,
					error: 'Something went wrong, try again later',
				})
			);
	};

	handleEmailChange = event => {
		this.setState({ email: event.target.value });
	};

	render() {
		const { email, hasBeenSent, error, sending } = this.state;
		return (
			<SubscriptionForm
				id="subscription-form"
				onSubmit={this.handleSubmit}
				onEmailChange={this.handleEmailChange}
				email={email}
				loading={sending}
				error={error}
				success={hasBeenSent}
			/>
		);
	}
}

export default SubscriptionFormContainer;
