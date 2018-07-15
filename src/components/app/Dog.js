import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../core/Modal';
import DogCard from './DogCard';
import DogInfo from './DogInfo';

const Button = styled.button`
	padding: 0;
	border: 0;
	background: transparent;
	cursor: pointer;

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.colors.focus};
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

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
		const { dog } = this.props;
		return (
			<React.Fragment>
				<Modal
					title={dog.name}
					isOpen={this.state.isModalOpen}
					onRequestClose={this.handleCloseModal}
				>
					<DogInfo dog={dog} />
				</Modal>
				<Button onClick={this.handleOpenModal}>
					<DogCard dog={dog} />
				</Button>
			</React.Fragment>
		);
	}
}

Dog.propTypes = {
	dog: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		kidFriendly: PropTypes.number,
		dogFriendly: PropTypes.number,
		lowShedding: PropTypes.number,
		easyToGroom: PropTypes.number,
		highEnergy: PropTypes.number,
		goodHealth: PropTypes.number,
		lowBarking: PropTypes.number,
		intelligence: PropTypes.number,
		easyToTrain: PropTypes.number,
		toleratesHot: PropTypes.number,
		toleratesCold: PropTypes.number,
	}),
};

export default Dog;
