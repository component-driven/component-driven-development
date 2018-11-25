import React, { Component } from 'react';
import {
	findDogs,
	getLocations,
	SIZE_SMALL,
	SIZE_MEDIUM,
	SIZE_LARGE,
} from '../../services/dogsService';
import DogFinder from './DogFinder';

class DogFinderContainer extends Component {
	unmounted = false;
	state = {
		filters: {
			location: '',
			size: SIZE_MEDIUM,
			rating: 4,
		},
		locations: [],
		dogs: [],
	};

	componentDidMount() {
		this.fetchLocations();
		this.fetchDogs();
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	fetchDogs = () => {
		findDogs(this.state.filters).then(
			dogs => this.unmounted || this.setState({ dogs })
		);
	};

	fetchLocations = () => {
		getLocations().then(
			locations => this.unmounted || this.setState({ locations })
		);
	};

	getFilterOptions() {
		return [
			{
				name: 'location',
				label: 'Location',
				options: [
					{ value: '', label: 'Any' },
					...this.state.locations.map(value => ({ value, label: value })),
				],
			},
			{
				name: 'size',
				label: 'Size',
				options: [
					{ value: '', label: 'Any' },
					{ value: SIZE_SMALL, label: 'Small' },
					{ value: SIZE_MEDIUM, label: 'Medium' },
					{ value: SIZE_LARGE, label: 'Large' },
				],
			},
			{
				name: 'rating',
				label: 'Rating',
				options: [
					{ value: 1, label: '1 star & up' },
					{ value: 2, label: '2 stars & up' },
					{ value: 3, label: '3 stars & up' },
					{ value: 4, label: '4 stars & up' },
					{ value: 5, label: '5 stars' },
				],
			},
		];
	}

	handleFilterUpdate = (field, value) => {
		console.log('handleFilterUpdate', field, value);
		this.setState(
			prevState => ({
				filters: {
					...prevState.filters,
					[field]: value,
				},
			}),
			this.fetchDogs
		);
	};

	render() {
		return (
			<DogFinder
				dogs={this.state.dogs}
				filters={this.state.filters}
				filterOptions={this.getFilterOptions()}
				onFilterUpdate={this.handleFilterUpdate}
			/>
		);
	}
}

export default DogFinderContainer;
