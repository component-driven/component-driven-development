import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Modal from '../core/Modal';
import DogCard from './DogCard';
import DogInfo from './DogInfo';
import DogInfo from './DogInfo';

class Dog extends Component {
	state = {
		isModalOpen: false,
	};

	handleOpenModal = () => {
		this.setState({ isModalOpen: true });
	};

	handleCloseModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		const {
			dog: { name },
		} = this.props;
		return (
			<React.Fragment>
				<Button>Rent {name}</Button>
			</React.Fragment>
		);
	}
}

Dog.propTypes = {
	dog: PropTypes.shape({
		image: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		info: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}),
};

export default Dog;
