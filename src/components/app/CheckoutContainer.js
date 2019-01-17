import React, { Component } from 'react';
import { STATUSES } from '../../consts';
import { getDog } from '../../services/dogsService';
import Checkout from './Checkout';

class CheckoutContainer extends Component {
	unmounted = false;
	state = {
		status: STATUSES.IDLE,
		dog: {},
	};

	componentDidMount() {
		this.fetchDog();
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	fetchDog = () => {
		this.setState({ status: STATUSES.LOADING });
		getDog(this.props.dogId)
			.then(
				dog => this.unmounted || this.setState({ status: STATUSES.READY, dog })
			)
			.catch(() => {
				this.setState({ status: STATUSES.FAILURE });
			});
	};

	render() {
		return <Checkout status={this.state.status} dog={this.state.dog} />;
	}
}

export default CheckoutContainer;
