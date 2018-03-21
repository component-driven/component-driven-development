import React, { Component } from 'react';
import findDogs from '../dogsService';
import DogFinder from './DogFinder';

class DogFinderContainer extends Component {
	state = {
		filters: {
			size: 3,
			energy: 3,
			barkness: 3,
		},
		dogs: [],
	};

	componentDidMount() {
		this.fetchDogs();
	}

	fetchDogs = () => {
		findDogs(this.state.filters).then(dogs => this.setState({ dogs }));
	};

	handleFilterUpdate = (field, value) => {
		this.setState(
			prevState => ({
				filters: {
					...prevState.filters,
					[field]: Number(value),
				},
			}),
			this.fetchDogs
		);
	};

	render() {
		return (
			<DogFinder {...this.state} onFilterUpdate={this.handleFilterUpdate} />
		);
	}
}

export default DogFinderContainer;
